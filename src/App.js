import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. test
        </p>
        <a
          className="App-link"
          href="https://awliu2.github.io/uncommon2023/player1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here if Player 1
        </a>
        <a
          className="App-link"
          href="https://awliu2.github.io/uncommon2023/player2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here if Player 2
        </a>
        <a
          className="App-link"
          href="https://awliu2.github.io/uncommon2023/player3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here if Player 3
        </a>
        <a
          className="App-link"
          href="https://awliu2.github.io/uncommon2023/player4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here if Player 4
        </a>
      </header>
    </div>
  );
}

export default App;
