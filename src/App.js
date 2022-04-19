import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HaleyandtheComets.com is Coming Soon!
        </p>
        <a
          className="App-link"
          href="http://haleyandthecomets.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stay Tuned
        </a>
      </header>
    </div>
  );
}

export default App;
