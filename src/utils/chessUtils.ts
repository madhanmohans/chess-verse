import { Chess, Move, Square } from 'chess.js';

// Initialize a new chess game
export const createNewGame = (): Chess => {
  return new Chess();
};

// Check if a move is legal
export const isLegalMove = (game: Chess, from: Square, to: Square): boolean => {
  try {
    const moves = game.moves({ square: from, verbose: true });
    return moves.some((move: Move) => move.to === to);
  } catch (error) {
    console.error('Error checking legal move:', error);
    return false;
  }
};

// Make a move and return the result
export const makeMove = (game: Chess, from: Square, to: Square): { 
  success: boolean; 
  move?: Move; 
  isCapture?: boolean;
  isCheck?: boolean;
  isCheckmate?: boolean;
  isStalemate?: boolean;
  isCastling?: boolean;
  isEnPassant?: boolean;
  capturedPiece?: string;
} => {
  try {
    // Store the state before the move
    const capturedPiece = game.get(to);
    const piece = game.get(from);
    const isEnPassant = piece && piece.type === 'p' && from[0] !== to[0] && !capturedPiece;
    const isCastling = piece && piece.type === 'k' && Math.abs(from.charCodeAt(0) - to.charCodeAt(0)) > 1;

    // Make the move
    const move = game.move({ from, to, promotion: 'q' });
    
    if (!move) return { success: false };
    
    // Check game state after move
    const isCheck = game.isCheck();
    const isCheckmate = game.isCheckmate();
    const isStalemate = game.isStalemate();
    
    return { 
      success: true, 
      move,
      isCapture: move.captured !== undefined,
      isCheck,
      isCheckmate,
      isStalemate,
      isCastling,
      isEnPassant,
      capturedPiece: capturedPiece ? `${capturedPiece.color}${capturedPiece.type}` : undefined
    };
  } catch (error) {
    console.error('Error making move:', error);
    return { success: false };
  }
};

// Get a random legal move (for simple computer opponent)
export const getRandomMove = (game: Chess): Move | null => {
  const moves = game.moves({ verbose: true });
  if (moves.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

// Simple 400 ELO computer move - mostly random with some basic strategy
export const getComputerMove = (game: Chess): Move | null => {
  const moves = game.moves({ verbose: true });
  if (moves.length === 0) return null;
  
  // Filter moves for interesting ones
  const checkMoves = moves.filter(move => move.san.includes('+'));
  const captureMoves = moves.filter(move => move.captured);
  
  // First priority: checkmate moves (not actually calculating these properly, just check moves)
  if (checkMoves.length > 0) {
    const randomIndex = Math.floor(Math.random() * checkMoves.length);
    return checkMoves[randomIndex];
  }
  
  // Second priority: capture moves (50% chance to pick one if available)
  if (captureMoves.length > 0 && Math.random() > 0.5) {
    const randomIndex = Math.floor(Math.random() * captureMoves.length);
    return captureMoves[randomIndex];
  }
  
  // Otherwise, make a random move
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}; 