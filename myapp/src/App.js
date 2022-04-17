import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import MovieDetails from './components/MovieDetails.js';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';

function App() {

  const [movieData, setmovieData] = useState({});
  const [searchTerm, setsearchTerm] = useState("batman");
  const [isLoading, setisLoading] = useState(false);
  const [movies, setmovies] = useState([]);
  const [error, seterror] = useState(null);

    useEffect(() => {
        setisLoading(true);

        const fetchData = async () => {
            try {
                const url = `https://www.omdbapi.com/?apikey=62c9fe58&t=${searchTerm}`;
                const response = await fetch(url);
                const data = await response.json();
                setmovieData(data);
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

    const change = () => {
        document.body.style.backgroundColor = "lightblue"
    }

    if(isLoading == true) {
        return (
            <div id="Loading">Loading</div>
        )
    } else {
        if(error != null) {
            <div>{error}</div>
        } else {
            return (
                <div>
                    <button onClick={change}></button>
                    <div id="Success">Fetch successful!</div>
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
                    <MovieCard
                        posterUrl={movieData.Poster}
                        title={movieData.Title}
                        type={movieData.Type}
                    />
                    <MovieList
                        list={[movieData,movieData,movieData,movieData]}
                    />
                </div>
            )
        }
    }
}

export default App;
