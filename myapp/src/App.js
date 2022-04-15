import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import MovieDetails from './components/MovieDetails.js';

function App() {

  const [movieData, setmovieData] = useState({});

    useEffect(() => {
        const url = "https://www.omdbapi.com/?apikey=62c9fe58&t=Avengers";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                // Simulate 1s loading time
                setTimeout(function() {
                    setmovieData(data);
                }, 1000);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);

    return (
        <MovieDetails 
          posterUrl={movieData.Poster}
          title={movieData.Title}
          rated={movieData.Rated}
          runtime={movieData.Runtime}
          genre={movieData.Genre}
          plot={movieData.Plot}
          actors={movieData.Actors}
          rating={movieData.imdbRating}
        />
    );
}

export default App;
