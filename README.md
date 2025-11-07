# Chess Verse: Where Chess Meets Music

Chess Verse is an interactive web application that integrates chess gameplay with musical elements. Each chess square corresponds to a musical note, and each piece plays with a different instrument based on its traditional role in warfare.

## Features

- **Musical Chess Board**: Each square on the chess board corresponds to a specific musical note
- **Unique Instrument Per Piece**:
  - **Pawns (Infantry)**: Simple triangle synth
  - **Knights (Cavalry)**: FM synth with complex harmonics
  - **Bishops (Archers)**: AM synth with shimmering textures
  - **Rooks (Siege weapons)**: Deep membrane synth
  - **Queen (Commander)**: Rich polyphonic synth
  - **King (Monarch)**: Regal, bell-like metal synth
- **Special Sound Effects** for chess events:
  - Opening game fanfare
  - Check alert
  - Checkmate victory theme
  - Castling sequence
  - En passant flourish
  - Stalemate pattern
  - Piece captures (exposition of both pieces' sounds)
- **400 ELO Computer Opponent**
- **Responsive Design**
- **Classic Black and White Board**

## Musical Mapping

The chess board is mapped to musical notes as follows:

- Files (columns) map directly to musical notes: a = C, b = D, c = E, d = F, e = G, f = A, g = B, h = C (octave higher)
- Ranks (rows) map to octaves: 1 = 1st octave, 2 = 2nd octave, and so on
- Example: The square c4 plays the note E4

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/chess-verse.git
cd chess-verse
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to play.

## How to Play

1. **Start a Game**: The game begins with you playing as White by default.

2. **Make a Move**: You can move pieces in two ways:
   - **Drag and Drop**: Click and hold a piece, then drag it to the destination square
   - **Click to Move**: Click on a piece to select it, then click on a valid destination square
   
3. **Musical Feedback**:
   - When you complete a move, you'll hear the sound of the destination square with the piece's instrument
   - Special chess events trigger unique musical phrases

4. **Computer Response**: The computer will automatically make a move after you, playing at approximately 400 ELO strength.

5. **Game Controls**: Use the buttons below the board to:
   - Start a new game
   - Switch to playing as Black

## Audio Behavior

- **Target Square Sound**: When you complete a move, the app plays the piece's instrument at the destination square's note
- **Capturing a Piece**: First plays the captured piece's sound, then the capturing piece's sound
- **Special Moves**: Each special chess event (castling, en passant, etc.) has a dramatic musical signature

## Interaction Hints

- **Drag and Drop**: Grasp a piece firmly and drag to the desired square - release to complete the move
- **Click to Move**: Click once on your piece, then click on your target square
- **Invalid Moves**: The piece will return to its original position if a move is invalid
- **Check Situations**: When in check, only moves that get you out of check are allowed

## Troubleshooting

- **No Sound?** Browsers require user interaction before allowing audio. Click any square to initialize the audio system.
- **Performance Issues?** If you experience lag, try using a more powerful device or a different browser.

## Technology Stack

- React
- TypeScript
- chess.js for chess logic
- Tone.js for audio generation
- react-chessboard for the visual interface

## License

This project is licensed under the MIT License - see the LICENSE file for details. 