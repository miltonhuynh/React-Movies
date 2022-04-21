import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import MovieDetails from './components/MovieDetails.js';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import Modal from './components/Modal';

function App() {


  const [movieData1, setmovieData1] = useState({});
  const [movieData2, setmovieData2] = useState({});
  const [movieData3, setmovieData3] = useState({});
  const [movieData4, setmovieData4] = useState({});
  const [searchTerm, setsearchTerm] = useState("batman");
  const [isLoading, setisLoading] = useState(false);
  const [movies, setmovies] = useState([]);
  const [error, seterror] = useState(null);
  const [MovieSearch, setMovieSearch] = useState("spider-man");
  const [isModalOpen, setIsModalOpen] = useState(false);

 

    useEffect(() => {
        setisLoading(true);

        const fetchData = async () => {
            try {
                const url = `https://www.omdbapi.com/?apikey=62c9fe58&s=${MovieSearch}`;
                const response = await fetch(url);
                const data = await response.json();

                setmovieData1(data.Search[1]);
                setmovieData2(data.Search[2]);
                setmovieData3(data.Search[3]);
                setmovieData4(data.Search[4]);

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

    function handleSubmit(event) {
        event.preventDefault();
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
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            onChange = {(event) => setMovieSearch(event.target.value)}
                        />
                        <button type="submit">Submit</button>
                    </form>


                    <div id="Success">Fetch successful!</div>
                    {/*
                    <MovieDetails 
                        posterUrl={movieData1.Poster}
                        title={movieData1.Title}
                        rated={movieData1.Rated}
                        runtime={movieData1.Runtime}
                        genre={movieData1.Genre}
                        plot={movieData1.Plot}
                        actors={movieData1.Actors}
                        rating={movieData1.imdbRating}
                    />
                    */}
                    <MovieList
                        list={[movieData1,movieData2,movieData3,movieData4]}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                    />
                    <Modal
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                    />
                </div>
            )
        }
    }
}

export default App;
