import logo from './logo.svg';
import './App.css';



let API_KEY = "62c9fe58";

async function getMoviesByName(id) {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

// ID: tt0848228
getMoviesByName("tt0848228");




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
