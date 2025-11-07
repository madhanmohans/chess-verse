import React from 'react';

interface PieceProps {
  isDragging?: boolean;
}

// White King
export const wK = ({ isDragging }: PieceProps) => (
  <svg viewBox="0 0 100 100" className={isDragging ? 'dragging' : ''}>
    <g transform="translate(50, 50)">
      {/* Body */}
      <path d="M -15 20 L -12 5 L -10 -5 L 10 -5 L 12 5 L 15 20 Z" 
            fill="#f5f5dc" 
            stroke="#2a2a2a" 
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"/>
      {/* Crown base */}
      <ellipse cx="0" cy="-5" rx="12" ry="8" 
               fill="#f5f5dc" 
               stroke="#2a2a2a" 
               strokeWidth="2.5"/>
      {/* Crown points */}
      <circle cx="-10" cy="-15" r="4" fill="#f5f5dc" stroke="#2a2a2a" strokeWidth="2"/>
      <circle cx="-5" cy="-18" r="4" fill="#f5f5dc" stroke="#2a2a2a" strokeWidth="2"/>
      <circle cx="0" cy="-20" r="4" fill="#f5f5dc" stroke="#2a2a2a" strokeWidth="2"/>
      <circle cx="5" cy="-18" r="4" fill="#f5f5dc" stroke="#2a2a2a" strokeWidth="2"/>
      <circle cx="10" cy="-15" r="4" fill="#f5f5dc" stroke="#2a2a2a" strokeWidth="2"/>
      {/* Cross lines for texture */}
      <path d="M -10 10 L -8 0 M 10 10 L 8 0" 
            stroke="#2a2a2a" 
            strokeWidth="1" 
            opacity="0.3"/>
    </g>
  </svg>
);

// Black King
export const bK = ({ isDragging }: PieceProps) => (
  <svg viewBox="0 0 100 100" className={isDragging ? 'dragging' : ''}>
    <g transform="translate(50, 50)">
      {/* Body */}
      <path d="M -15 20 L -12 5 L -10 -5 L 10 -5 L 12 5 L 15 20 Z" 
            fill="#3a3a3a" 
            stroke="#1a1a1a" 
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"/>
      {/* Crown base */}
      <ellipse cx="0" cy="-5" rx="12" ry="8" 
               fill="#3a3a3a" 
               stroke="#1a1a1a" 
               strokeWidth="2.5"/>
      {/* Crown points */}
      <circle cx="-10" cy="-15" r="4" fill="#3a3a3a" stroke="#1a1a1a" strokeWidth="2"/>
      <circle cx="-5" cy="-18" r="4" fill="#3a3a3a" stroke="#1a1a1a" strokeWidth="2"/>
      <circle cx="0" cy="-20" r="4" fill="#3a3a3a" stroke="#1a1a1a" strokeWidth="2"/>
      <circle cx="5" cy="-18" r="4" fill="#3a3a3a" stroke="#1a1a1a" strokeWidth="2"/>
      <circle cx="10" cy="-15" r="4" fill="#3a3a3a" stroke="#1a1a1a" strokeWidth="2"/>
      {/* Cross lines for texture */}
      <path d="M -10 10 L -8 0 M 10 10 L 8 0" 
            stroke="#1a1a1a" 
            strokeWidth="1" 
            opacity="0.3"/>
    </g>
  </svg>
);

// White Queen
export const wQ = ({ isDragging }: PieceProps) => (
  <svg viewBox="0 0 100 100" className={isDragging ? 'dragging' : ''}>
    <g transform="translate(50, 50)">
      {/* Body */}
      <path d="M -15 20 L -12 5 L -10 -5 L 10 -5 L 12 5 L 15 20 Z" 
            fill="#f5f5dc" 
            stroke="#2a2a2a" 
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"/>
      {/* Crown base */}
      <ellipse cx="0" cy="-5" rx="12" ry="8" 
               fill="#f5f5dc" 
               stroke="#2a2a2a" 
               strokeWidth="2.5"/>
      {/* Jagged crown */}
      <path d="M -12 -10 L -8 -20 L -4 -15 L 0 -22 L 4 -15 L 8 -20 L 12 -10" 
            fill="#f5f5dc" 
            stroke="#2a2a2a" 
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"/>
      {/* Cross lines for texture */}
      <path d="M -10 10 L -8 0 M 10 10 L 8 0" 
            stroke="#2a2a2a" 
            strokeWidth="1" 
            opacity="0.3"/>
    </g>
  </svg>
);

// Black Queen
export const bQ = ({ isDragging }: PieceProps) => (
  <svg viewBox="0 0 100 100" className={isDragging ? 'dragging' : ''}>
    <g transform="translate(50, 50)">
      {/* Body */}
      <path d="M -15 20 L -12 5 L -10 -5 L 10 -5 L 12 5 L 15 20 Z" 
            fill="#3a3a3a" 
            stroke="#1a1a1a" 
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"/>
      {/* Crown base */}
      <ellipse cx="0" cy="-5" rx="12" ry="8" 
               fill="#3a3a3a" 
               stroke="#1a1a1a" 
               strokeWidth="2.5"/>
      {/* Jagged crown */}
      <path d="M -12 -10 L -8 -20 L -4 -15 L 0 -22 L 4 -15 L 8 -20 L 12 -10" 
            fill="#3a3a3a" 
            stroke="#1a1a1a" 
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"/>
      {/* Cross lines for texture */}
      <path d="M -10 10 L -8 0 M 10 10 L 8 0" 
            stroke="#1a1a1a" 
            strokeWidth="1" 
            opacity="0.3"/>
    </g>
  </svg>
);

// White Bishop
export const wB = ({ isDragging }: PieceProps) => (
  <svg viewBox="0 0 100 100" className={isDragging ? 'dragging' : ''}>
    <g transform="translate(50, 50)">
      {/* Cone shape */}
      <path d="M -15 20 L -5 -15 L 0 -20 L 5 -15 L 15 20 Z" 
            fill="#f5f5dc" 
            stroke="#2a2a2a" 
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"/>
      {/* Cross on front */}
      <line x1="0" y1="-5" x2="0" y2="5" stroke="#2a2a2a" strokeWidth="2"/>
      <line x1="-5" y1="0" x2="5" y2="0" stroke="#2a2a2a" strokeWidth="2"/>
      {/* Cross on side */}
      <g transform="translate(-8, 0) scale(0.6, 0.6)">
        <line x1="0" y1="-5" x2="0" y2="5" stroke="#2a2a2a" strokeWidth="2"/>
        <line x1="-5" y1="0" x2="5" y2="0" stroke="#2a2a2a" strokeWidth="2"/>
      </g>
      {/* Diagonal shading */}
      <path d="M -10 15 L -5 5 M -5 15 L 0 5 M 5 15 L 10 5" 
            stroke="#2a2a2a" 
            strokeWidth="1" 
            opacity="0.3"/>
    </g>
  </svg>
);

// Black Bishop
export const bB = ({ isDragging }: PieceProps) => (
  <svg viewBox="0 0 100 100" className={isDragging ? 'dragging' : ''}>
    <g transform="translate(50, 50)">
      {/* Cone shape */}
      <path d="M -15 20 L -5 -15 L 0 -20 L 5 -15 L 15 20 Z" 
            fill="#3a3a3a" 
            stroke="#1a1a1a" 
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"/>
      {/* Cross on front */}
      <line x1="0" y1="-5" x2="0" y2="5" stroke="#f5f5dc" strokeWidth="2"/>
      <line x1="-5" y1="0" x2="5" y2="0" stroke="#f5f5dc" strokeWidth="2"/>
      {/* Cross on side */}
      <g transform="translate(-8, 0) scale(0.6, 0.6)">
        <line x1="0" y1="-5" x2="0" y2="5" stroke="#f5f5dc" strokeWidth="2"/>
        <line x1="-5" y1="0" x2="5" y2="0" stroke="#f5f5dc" strokeWidth="2"/>
      </g>
      {/* Diagonal shading */}
      <path d="M -10 15 L -5 5 M -5 15 L 0 5 M 5 15 L 10 5" 
            stroke="#1a1a1a" 
            strokeWidth="1" 
            opacity="0.3"/>
    </g>
  </svg>
);

// White Rook
export const wR = ({ isDragging }: PieceProps) => (
  <svg viewBox="0 0 100 100" className={isDragging ? 'dragging' : ''}>
    <g transform="translate(50, 50)">
      {/* Tower body */}
      <rect x="-12" y="-10" width="24" height="30" 
            fill="#f5f5dc" 
            stroke="#2a2a2a" 
            strokeWidth="2.5"
            rx="2"/>
      {/* Battlements */}
      <path d="M -12 -10 L -12 -18 L -8 -18 L -8 -14 L -4 -14 L -4 -18 L 0 -18 L 0 -14 L 4 -14 L 4 -18 L 8 -18 L 8 -14 L 12 -14 L 12 -10" 
            fill="#f5f5dc" 
            stroke="#2a2a2a" 
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"/>
      {/* Horizontal bands */}
      <line x1="-12" y1="0" x2="12" y2="0" stroke="#2a2a2a" strokeWidth="2"/>
      <line x1="-12" y1="10" x2="12" y2="10" stroke="#2a2a2a" strokeWidth="2"/>
      {/* Vertical shading */}
      <path d="M -8 -5 L -8 15 M 0 -5 L 0 15 M 8 -5 L 8 15" 
            stroke="#2a2a2a" 
            strokeWidth="1" 
            opacity="0.3"/>
    </g>
  </svg>
);

// Black Rook
export const bR = ({ isDragging }: PieceProps) => (
  <svg viewBox="0 0 100 100" className={isDragging ? 'dragging' : ''}>
    <g transform="translate(50, 50)">
      {/* Tower body */}
      <rect x="-12" y="-10" width="24" height="30" 
            fill="#3a3a3a" 
            stroke="#1a1a1a" 
            strokeWidth="2.5"
            rx="2"/>
      {/* Battlements */}
      <path d="M -12 -10 L -12 -18 L -8 -18 L -8 -14 L -4 -14 L -4 -18 L 0 -18 L 0 -14 L 4 -14 L 4 -18 L 8 -18 L 8 -14 L 12 -14 L 12 -10" 
            fill="#3a3a3a" 
            stroke="#1a1a1a" 
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"/>
      {/* Horizontal bands */}
      <line x1="-12" y1="0" x2="12" y2="0" stroke="#f5f5dc" strokeWidth="2"/>
      <line x1="-12" y1="10" x2="12" y2="10" stroke="#f5f5dc" strokeWidth="2"/>
      {/* Vertical shading */}
      <path d="M -8 -5 L -8 15 M 0 -5 L 0 15 M 8 -5 L 8 15" 
            stroke="#1a1a1a" 
            strokeWidth="1" 
            opacity="0.3"/>
    </g>
  </svg>
);

// White Knight
export const wN = ({ isDragging }: PieceProps) => (
  <svg viewBox="0 0 100 100" className={isDragging ? 'dragging' : ''}>
    <g transform="translate(50, 55)">
      {/* Horse head */}
      <path d="M -15 15 L -15 0 C -15 -10 -10 -15 -5 -18 L 0 -20 C 5 -20 10 -18 12 -15 C 15 -10 15 -5 12 0 L 10 5 C 8 8 5 10 0 10 L -5 10 Z" 
            fill="#f5f5dc" 
            stroke="#2a2a2a" 
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"/>
      {/* Mane */}
      <path d="M -5 -18 C -8 -15 -10 -10 -10 -5 M 0 -20 C -3 -17 -5 -12 -5 -7 M 5 -19 C 2 -16 0 -11 0 -6" 
            stroke="#2a2a2a" 
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"/>
      {/* Eye */}
      <circle cx="-5" cy="-8" r="2" fill="#2a2a2a"/>
      {/* Nostril */}
      <ellipse cx="8" cy="-2" rx="2" ry="3" fill="#2a2a2a" transform="rotate(30)"/>
    </g>
  </svg>
);

// Black Knight
export const bN = ({ isDragging }: PieceProps) => (
  <svg viewBox="0 0 100 100" className={isDragging ? 'dragging' : ''}>
    <g transform="translate(50, 55)">
      {/* Horse head */}
      <path d="M -15 15 L -15 0 C -15 -10 -10 -15 -5 -18 L 0 -20 C 5 -20 10 -18 12 -15 C 15 -10 15 -5 12 0 L 10 5 C 8 8 5 10 0 10 L -5 10 Z" 
            fill="#3a3a3a" 
            stroke="#1a1a1a" 
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"/>
      {/* Mane */}
      <path d="M -5 -18 C -8 -15 -10 -10 -10 -5 M 0 -20 C -3 -17 -5 -12 -5 -7 M 5 -19 C 2 -16 0 -11 0 -6" 
            stroke="#f5f5dc" 
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"/>
      {/* Eye */}
      <circle cx="-5" cy="-8" r="2" fill="#f5f5dc"/>
      {/* Nostril */}
      <ellipse cx="8" cy="-2" rx="2" ry="3" fill="#f5f5dc" transform="rotate(30)"/>
    </g>
  </svg>
);

// White Pawn
export const wP = ({ isDragging }: PieceProps) => (
  <svg viewBox="0 0 100 100" className={isDragging ? 'dragging' : ''}>
    <g transform="translate(50, 50)">
      {/* Simple oval body */}
      <ellipse cx="0" cy="5" rx="10" ry="15" 
               fill="#f5f5dc" 
               stroke="#2a2a2a" 
               strokeWidth="2.5"/>
      {/* Head */}
      <circle cx="0" cy="-10" r="8" 
              fill="#f5f5dc" 
              stroke="#2a2a2a" 
              strokeWidth="2.5"/>
      {/* Shading lines */}
      <path d="M -5 10 L -3 0 M 5 10 L 3 0" 
            stroke="#2a2a2a" 
            strokeWidth="1" 
            opacity="0.3"/>
    </g>
  </svg>
);

// Black Pawn
export const bP = ({ isDragging }: PieceProps) => (
  <svg viewBox="0 0 100 100" className={isDragging ? 'dragging' : ''}>
    <g transform="translate(50, 50)">
      {/* Simple oval body */}
      <ellipse cx="0" cy="5" rx="10" ry="15" 
               fill="#3a3a3a" 
               stroke="#1a1a1a" 
               strokeWidth="2.5"/>
      {/* Head */}
      <circle cx="0" cy="-10" r="8" 
              fill="#3a3a3a" 
              stroke="#1a1a1a" 
              strokeWidth="2.5"/>
      {/* Shading lines */}
      <path d="M -5 10 L -3 0 M 5 10 L 3 0" 
            stroke="#1a1a1a" 
            strokeWidth="1" 
            opacity="0.3"/>
    </g>
  </svg>
);

// Export all pieces as a map with proper typing
export const customPieces: Record<string, React.FC<PieceProps>> = {
  wK, wQ, wB, wN, wR, wP,
  bK, bQ, bB, bN, bR, bP
}; 