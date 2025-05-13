import './App.css';
import ChessBoard from './components/ChessBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chess Verse</h1>
        <h2>Where Chess Meets Music</h2>
      </header>
      <main className="App-main">
        <ChessBoard />
      </main>
      <footer className="App-footer">
        <p>Move chess pieces to create melodic compositions as you play.</p>
        <p>Each square represents a musical note, and each piece has its own unique instrument.</p>
      </footer>
    </div>
  );
}

export default App; 