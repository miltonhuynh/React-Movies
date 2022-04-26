import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import MovieList from './components/MovieList';
import Modal from './components/Modal';

function App() {
  const [movieData1, setmovieData1] = useState({});
  const [movieData2, setmovieData2] = useState({});
  const [movieData3, setmovieData3] = useState({});
  const [movieData4, setmovieData4] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(null);
  const [MovieSearch, setMovieSearch] = useState("batman");
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

                setmovieData1(data.Search[1]);
                setmovieData2(data.Search[2]);
                setmovieData3(data.Search[3]);
                setmovieData4(data.Search[4]);

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
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            onChange = {(event) => setMovieSearch(event.target.value)}
                        />
                        <button type="submit">Submit</button>
                    </form>

                    <div id="Success">Fetch successful!</div>
                    {/*
                    */}
                    <MovieList
                        list={[movieData1,movieData2,movieData3,movieData4]}
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
                </div>
            )
        }
    }
}

export default App;

