import React, { useState, useEffect, useCallback } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess, Square } from 'chess.js';
import { 
  playSquareNote, 
  playPieceSound, 
  playCapture, 
  playSpecialSound,
  initAudio
} from '../utils/audioUtils';
import {
  createNewGame,
  makeMove,
  getComputerMove
} from '../utils/chessUtils';

interface ChessBoardProps {
  showCoordinates?: boolean;
  darkSquareStyle?: React.CSSProperties;
  lightSquareStyle?: React.CSSProperties;
  boardWidth?: number;
}

const ChessBoard: React.FC<ChessBoardProps> = ({
  showCoordinates = true,
  darkSquareStyle = { backgroundColor: '#769656' },
  lightSquareStyle = { backgroundColor: '#eeeed2' },
  boardWidth = 560
}) => {
  const [game, setGame] = useState<Chess>(createNewGame());
  const [fen, setFen] = useState<string>(game.fen());
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [gameStatus, setGameStatus] = useState<string>('');
  const [playerColor, setPlayerColor] = useState<'w' | 'b'>('w');
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const [audioInitialized, setAudioInitialized] = useState<boolean>(false);

  // Initialize audio
  useEffect(() => {
    const init = async () => {
      await initAudio();
      setAudioInitialized(true);
      
      // Play opening sound when game starts
      playSpecialSound('opening');
    };
    init();
  }, []);

  // Update game status messages
  useEffect(() => {
    if (game.isCheckmate()) {
      setGameStatus(`Checkmate! ${game.turn() === 'w' ? 'Black' : 'White'} wins.`);
    } else if (game.isStalemate()) {
      setGameStatus('Game ended in stalemate.');
    } else if (game.isDraw()) {
      setGameStatus('Game ended in draw.');
    } else if (game.isCheck()) {
      setGameStatus(`${game.turn() === 'w' ? 'White' : 'Black'} is in check.`);
    } else {
      setGameStatus(`${game.turn() === 'w' ? 'White' : 'Black'} to move.`);
    }
  }, [game, fen]);

  // Handle computer move
  const makeComputerMove = useCallback(() => {
    if (game.isGameOver() || game.turn() !== 'b') return;
    
    setIsThinking(true);
    // Add a small delay to simulate thinking
    setTimeout(() => {
      const move = getComputerMove(game);
      
      if (move) {
        const newGame = new Chess(game.fen());
        const piece = newGame.get(move.from as Square);
        
        // First play the source square note
        playSquareNote(move.from as Square);
        
        // Make the move
        const result = makeMove(newGame, move.from as Square, move.to as Square);
        
        if (result.success) {
          // Play the destination sound after a small delay
          setTimeout(() => {
            // Play appropriate sounds
            if (result.isCapture && result.capturedPiece) {
              playCapture(`${piece?.color}${piece?.type}`, result.capturedPiece, move.to as Square);
            } else {
              playPieceSound(`${piece?.color}${piece?.type}`, move.to as Square);
            }
            
            // Play special sounds if applicable
            if (result.isCheckmate) {
              playSpecialSound('checkmate');
            } else if (result.isCheck) {
              playSpecialSound('check');
            } else if (result.isStalemate) {
              playSpecialSound('stalemate');
            } else if (result.isCastling) {
              playSpecialSound('castling');
            } else if (result.isEnPassant) {
              playSpecialSound('enPassant');
            }
          }, 300);
          
          // Update game state
          setGame(newGame);
          setFen(newGame.fen());
        }
      }
      
      setIsThinking(false);
    }, 1000);
  }, [game]);

  // Handle computer's turn
  useEffect(() => {
    if (audioInitialized && game.turn() !== playerColor && !game.isGameOver()) {
      makeComputerMove();
    }
  }, [audioInitialized, game, fen, playerColor, makeComputerMove]);

  // Handle piece dragging for drag and drop movement
  const onPieceDragBegin = (piece: string, sourceSquare: Square) => {
    // Initialize audio if not yet initialized (browsers require user interaction)
    if (!audioInitialized) {
      initAudio().then(() => setAudioInitialized(true));
      return;
    }

    // Return if it's not the player's turn or the game is over
    if (game.turn() !== playerColor || game.isGameOver() || isThinking) return;
    
    // Play the note for the source square
    playSquareNote(sourceSquare);
  };

  // Handle piece drop for drag and drop movement
  const onDrop = (sourceSquare: Square, targetSquare: Square, piece: string) => {
    // Initialize audio if not yet initialized (browsers require user interaction)
    if (!audioInitialized) {
      initAudio().then(() => setAudioInitialized(true));
      return false;
    }

    // Return if it's not the player's turn or the game is over
    if (game.turn() !== playerColor || game.isGameOver() || isThinking) return false;
    
    // Try to make a move
    const newGame = new Chess(game.fen());
    const gamePiece = newGame.get(sourceSquare);
    
    const result = makeMove(newGame, sourceSquare, targetSquare);
    
    if (result.success) {
      // Play appropriate sounds
      if (result.isCapture && result.capturedPiece) {
        playCapture(`${gamePiece?.color}${gamePiece?.type}`, result.capturedPiece, targetSquare);
      } else {
        playPieceSound(`${gamePiece?.color}${gamePiece?.type}`, targetSquare);
      }
      
      // Play special sounds if applicable
      if (result.isCheckmate) {
        playSpecialSound('checkmate');
      } else if (result.isCheck) {
        playSpecialSound('check');
      } else if (result.isStalemate) {
        playSpecialSound('stalemate');
      } else if (result.isCastling) {
        playSpecialSound('castling');
      } else if (result.isEnPassant) {
        playSpecialSound('enPassant');
      }
      
      // Update game state
      setGame(newGame);
      setFen(newGame.fen());
      setSelectedSquare(null);
      return true;
    }
    
    return false;
  };

  // Handle player move with click-to-select
  const onSquareClick = (square: Square) => {
    // Initialize audio if not yet initialized (browsers require user interaction)
    if (!audioInitialized) {
      initAudio().then(() => setAudioInitialized(true));
    }

    // Return if it's not the player's turn or the game is over
    if (game.turn() !== playerColor || game.isGameOver() || isThinking) return;
    
    // Play the note for the square
    playSquareNote(square);
    
    // If no square is selected, select this one if it has a piece of the right color
    if (!selectedSquare) {
      const piece = game.get(square);
      if (piece && piece.color === playerColor) {
        setSelectedSquare(square);
      }
      return;
    }
    
    // If the square is already selected, unselect it
    if (selectedSquare === square) {
      setSelectedSquare(null);
      return;
    }
    
    // Try to make a move
    const newGame = new Chess(game.fen());
    const piece = newGame.get(selectedSquare);
    
    const result = makeMove(newGame, selectedSquare, square);
    
    if (result.success) {
      // Play appropriate sounds
      if (result.isCapture && result.capturedPiece) {
        playCapture(`${piece?.color}${piece?.type}`, result.capturedPiece, square);
      } else {
        playPieceSound(`${piece?.color}${piece?.type}`, square);
      }
      
      // Play special sounds if applicable
      if (result.isCheckmate) {
        playSpecialSound('checkmate');
      } else if (result.isCheck) {
        playSpecialSound('check');
      } else if (result.isStalemate) {
        playSpecialSound('stalemate');
      } else if (result.isCastling) {
        playSpecialSound('castling');
      } else if (result.isEnPassant) {
        playSpecialSound('enPassant');
      }
      
      // Update game state
      setGame(newGame);
      setFen(newGame.fen());
      setSelectedSquare(null);
    } else {
      // Invalid move, just select the new square if it has a piece of the right color
      const newPiece = game.get(square);
      if (newPiece && newPiece.color === playerColor) {
        setSelectedSquare(square);
      } else {
        setSelectedSquare(null);
      }
    }
  };

  // Reset the game
  const resetGame = () => {
    const newGame = createNewGame();
    setGame(newGame);
    setFen(newGame.fen());
    setSelectedSquare(null);
    setGameStatus(`${newGame.turn() === 'w' ? 'White' : 'Black'} to move.`);
    
    // Play opening sound
    playSpecialSound('opening');
  };

  // Switch sides
  const switchSides = () => {
    setPlayerColor(prev => prev === 'w' ? 'b' : 'w');
  };

  return (
    <div className="chess-board-container">
      <div className="board-wrapper" style={{ width: boardWidth }}>
        <Chessboard
          position={fen}
          onSquareClick={onSquareClick}
          onPieceDragBegin={onPieceDragBegin}
          onPieceDrop={onDrop}
          customDarkSquareStyle={darkSquareStyle as Record<string, string>}
          customLightSquareStyle={lightSquareStyle as Record<string, string>}
          showBoardNotation={showCoordinates}
          boardWidth={boardWidth}
          areArrowsAllowed={true}
          animationDuration={300}
        />
      </div>
      
      <div className="game-controls" style={{ marginTop: '20px' }}>
        <div className="game-status">
          <p>{gameStatus}</p>
          {isThinking && <p>Computer is thinking...</p>}
        </div>
        
        <div className="button-controls" style={{ marginTop: '10px' }}>
          <button onClick={resetGame} style={{ marginRight: '10px' }}>New Game</button>
          <button onClick={switchSides}>Switch Sides</button>
        </div>
      </div>
    </div>
  );
};

export default ChessBoard; 