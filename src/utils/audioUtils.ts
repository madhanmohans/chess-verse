import * as Tone from 'tone';

// Map chess files (columns) to notes - direct mapping now
const fileToNote: Record<string, string> = {
  'a': 'C',
  'b': 'D',
  'c': 'E',
  'd': 'F',
  'e': 'G',
  'f': 'A',
  'g': 'B',
  'h': 'C', // H is C of the next octave
};

// Map chess ranks (rows) to octaves
const rankToOctave: Record<string, number> = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
};

// Map pieces to instruments
const pieceToInstrument: Record<string, any> = {
  'p': new Tone.Synth({ // Pawn - Infantry (simple synth)
    oscillator: { type: 'triangle' },
    envelope: { attack: 0.01, decay: 0.1, sustain: 0.2, release: 0.5 }
  }).toDestination(),
  'n': new Tone.FMSynth({ // Knight - Cavalry (more complex sound)
    harmonicity: 3,
    modulationIndex: 10,
    oscillator: { type: 'sine' },
    envelope: { attack: 0.01, decay: 0.2, sustain: 0.2, release: 0.4 }
  }).toDestination(),
  'b': new Tone.AMSynth({ // Bishop - Archers (shimmering sound)
    harmonicity: 2,
    oscillator: { type: 'triangle' },
    envelope: { attack: 0.02, decay: 0.1, sustain: 0.3, release: 0.8 }
  }).toDestination(),
  'r': new Tone.MembraneSynth({ // Rook - Siege weapons (deep, powerful sound)
    pitchDecay: 0.05,
    octaves: 4,
    oscillator: { type: 'sine' },
    envelope: { attack: 0.01, decay: 0.4, sustain: 0.1, release: 1.4 }
  }).toDestination(),
  'q': new Tone.PolySynth().toDestination(), // Queen - Commander (complex, rich sound)
  'k': new Tone.MetalSynth({ // King - Monarch (regal, bell-like sound)
    envelope: { attack: 0.001, decay: 1.4, release: 0.2 },
    harmonicity: 5.1,
    modulationIndex: 32,
    resonance: 4000,
    octaves: 1.5
  }).toDestination()
};

// Special sound effects
const specialSounds = {
  opening: () => {
    const synth = new Tone.PolySynth().toDestination();
    synth.triggerAttackRelease(["C4", "E4", "G4", "C5"], "4n", undefined, 0.9);
    setTimeout(() => {
      synth.triggerAttackRelease(["D4", "F4", "A4", "D5"], "4n", undefined, 1);
    }, 500);
  },
  checkmate: () => {
    const synth = new Tone.PolySynth().toDestination();
    synth.triggerAttackRelease(["C4", "E4", "G4", "C5", "E5"], "8n", undefined, 0.8);
    setTimeout(() => {
      synth.triggerAttackRelease(["D4", "F4", "A4", "D5", "F5"], "4n", undefined, 0.9);
    }, 300);
    setTimeout(() => {
      synth.triggerAttackRelease(["G4", "B4", "D5", "G5"], "2n", undefined, 1);
    }, 800);
  },
  check: () => {
    const synth = new Tone.PolySynth().toDestination();
    synth.triggerAttackRelease(["C5", "G4"], "8n", undefined, 0.7);
    setTimeout(() => {
      synth.triggerAttackRelease(["C5", "G4"], "16n", undefined, 0.9);
    }, 200);
  },
  castling: () => {
    const synth = new Tone.PolySynth().toDestination();
    const now = Tone.now();
    synth.triggerAttackRelease("C4", "8n", now, 0.7);
    synth.triggerAttackRelease("G4", "8n", now + 0.1, 0.8);
    synth.triggerAttackRelease("C5", "4n", now + 0.2, 0.9);
    synth.triggerAttackRelease("E5", "2n", now + 0.4, 1);
  },
  enPassant: () => {
    const synth = new Tone.FMSynth().toDestination();
    synth.triggerAttackRelease("G6", "16n", undefined, 0.7);
    setTimeout(() => {
      synth.triggerAttackRelease("A6", "16n", undefined, 0.8);
    }, 100);
    setTimeout(() => {
      synth.triggerAttackRelease("B6", "8n", undefined, 0.9);
    }, 200);
  },
  stalemate: () => {
    const synth = new Tone.AMSynth().toDestination();
    synth.triggerAttackRelease("C4", "8n", undefined, 0.6);
    setTimeout(() => {
      synth.triggerAttackRelease("C4", "8n", undefined, 0.4);
    }, 300);
    setTimeout(() => {
      synth.triggerAttackRelease("C4", "2n", undefined, 0.2);
    }, 600);
  },
};

// Function to play the note for a square
export const playSquareNote = (square: string) => {
  if (!square || square.length !== 2) return;
  
  const file = square[0];
  const rank = square[1];
  
  const note = fileToNote[file];
  const octave = rankToOctave[rank];
  
  if (!note || !octave) return;
  
  // Handle h and g files which need octave adjustment
  let adjustedOctave = octave;
  if (file === 'h') {
    adjustedOctave += 1; // H is C of the next octave
  } else if (file === 'g' && note === 'B') {
    // No adjustment needed anymore, as we're directly mapping
  }
  
  const noteWithOctave = `${note}${adjustedOctave}`;
  const synth = new Tone.Synth({
    oscillator: { type: 'sine' },
    envelope: { attack: 0.01, decay: 0.2, sustain: 0.2, release: 0.5 }
  }).toDestination();
  synth.triggerAttackRelease(noteWithOctave, "8n", undefined, 0.7);
};

// Function to play the sound for a piece
export const playPieceSound = (piece: string, square: string) => {
  if (!piece || !square || square.length !== 2) return;
  
  const pieceType = piece.toLowerCase().charAt(1); // 'p' for pawn, 'n' for knight, etc.
  const file = square[0];
  const rank = square[1];
  
  const note = fileToNote[file];
  const octave = rankToOctave[rank];
  
  if (!note || !octave || !pieceType) return;
  
  // Handle h and g files which need octave adjustment
  let adjustedOctave = octave;
  if (file === 'h') {
    adjustedOctave += 1; // H is C of the next octave
  } else if (file === 'g' && note === 'B') {
    // No adjustment needed anymore
  }
  
  const noteWithOctave = `${note}${adjustedOctave}`;
  
  const instrument = pieceToInstrument[pieceType];
  if (instrument) {
    instrument.triggerAttackRelease(noteWithOctave, "8n", undefined, 0.8);
  }
};

// Function to play capture sound (both pieces' notes)
export const playCapture = (capturingPiece: string, capturedPiece: string, square: string) => {
  if (!capturingPiece || !capturedPiece || !square) return;
  
  const capturingType = capturingPiece.toLowerCase().charAt(1);
  const capturedType = capturedPiece.toLowerCase().charAt(1);
  
  if (!capturingType || !capturedType) return;
  
  // Play both piece sounds in quick succession
  const file = square[0];
  const rank = square[1];
  
  const note = fileToNote[file];
  const octave = rankToOctave[rank];
  
  if (!note || !octave) return;
  
  // Handle h and g files which need octave adjustment
  let adjustedOctave = octave;
  if (file === 'h') {
    adjustedOctave += 1; // H is C of the next octave
  } else if (file === 'g' && note === 'B') {
    // No adjustment needed anymore
  }
  
  const noteWithOctave = `${note}${adjustedOctave}`;
  
  const capturingInstrument = pieceToInstrument[capturingType];
  const capturedInstrument = pieceToInstrument[capturedType];
  
  if (capturedInstrument) {
    capturedInstrument.triggerAttackRelease(noteWithOctave, "16n", undefined, 0.9);
  }
  
  setTimeout(() => {
    if (capturingInstrument) {
      capturingInstrument.triggerAttackRelease(noteWithOctave, "8n", undefined, 1);
    }
  }, 150);
};

// Function to play special sounds
export const playSpecialSound = (type: keyof typeof specialSounds) => {
  if (specialSounds[type]) {
    specialSounds[type]();
  }
};

export const initAudio = async () => {
  await Tone.start();
  console.log("Audio initialized");
}; 