import logo from './logo.svg';
import './App.css';

let API_KEY = "";

async function getMoviesByName(name) {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&t=${name}`;
  const response = await
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
