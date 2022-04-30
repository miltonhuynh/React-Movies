import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import MovieList from './components/MovieList';
import Modal from './components/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet,Link} from "react-router-dom"

function App() {
  const [movieData1, setmovieData1] = useState({});
  const [movieData2, setmovieData2] = useState({});
  const [movieData3, setmovieData3] = useState({});
  const [movieData4, setmovieData4] = useState({});
  const [movieData5, setmovieData5] = useState({});
  const [movieData6, setmovieData6] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(null);
  const [MovieSearch, setMovieSearch] = useState('batman');
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const [movieID, setmovieID] = useState();

    useEffect(() => {
        setisLoading(true);

        const fetchData = async () => {
            try {
                const url = `https://www.omdbapi.com/?apikey=62c9fe58&s=${MovieSearch}`;
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);

                setmovieData1(data.Search[0]);
                setmovieData2(data.Search[1]);
                setmovieData3(data.Search[2]);
                setmovieData4(data.Search[3]);
                setmovieData5(data.Search[4]);
                setmovieData6(data.Search[5]);

                setisLoading(false);  
                seterror(null);
            } catch (error) {
                seterror(error);
                setisLoading(false);
            }
        };
        fetchData();
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        const fetchData = async () => {
            try {
                const url = `https://www.omdbapi.com/?apikey=62c9fe58&s=${MovieSearch}`;
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);

                setmovieData1(data.Search[1]);
                setmovieData2(data.Search[2]);
                setmovieData3(data.Search[3]);
                setmovieData4(data.Search[4]);
                setmovieData5(data.Search[5]);
                setmovieData6(data.Search[6]);

                setisLoading(false);  
                seterror(null);
            } catch (error) {
                seterror(error);
                setisLoading(false);
            }
        };
        fetchData();
    }

    if(isLoading === true) {
        return (
            <div id="Loading">Loading</div>
        )
    } else {
        if(error != null) {
            <div>{error}</div>
        } else {
            return (
                <div>
                    <form onSubmit={handleSubmit} id="form">
                        <input
                            id="input"
                            type="text"
                            placeholder="Type in a name of a movie"
                            onChange = {(event) => setMovieSearch(event.target.value)}
                        />
                        <Button variant="primary" type="submit">SEARCH</Button>
                    </form>
                    <Link to="routertest">Router test</Link>
                    <div id="Success">Fetch successful! Type in another movie!</div>
                    {/*
                    */}
                    <MovieList
                        list={[movieData1,movieData2,movieData3,movieData4,movieData5,movieData6]}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        movieID={movieID}
                        setmovieID={setmovieID}
                    />
                    <Modal
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        movieID={movieID}
                        setmovieID={setmovieID}
                    />
                    <Outlet />
                </div>
            )
        }
    }
}

export default App;

