import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import MovieDetails from './components/MovieDetails.js';

function App() {

  const [movieData, setmovieData] = useState({});
  const [searchTerm, setsearchTerm] = useState("batman");
  const [isLoading, setisLoading] = useState(false);
  const [movies, setmovies] = useState([]);
  const [error, seterror] = useState(null);

    useEffect(() => {
        setisLoading(true);
        const url = "https://www.omdbapi.com/?apikey=62c9fe58&t=Avengers";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                // Simulate 1s loading time
                setTimeout(function() {
                    setmovieData(data);
                }, 1000);
                setisLoading(false);
                seterror(null);
            } catch (error) {
                seterror(error);
                movies([]);
                setisLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <>
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
        </>
    );
}

export default App;
