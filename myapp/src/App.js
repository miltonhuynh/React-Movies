import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import MovieCards from './MovieCards.js';
import GetMovieData from './GetMovieData.js';

function App() {
  return (
    <>
      <GetMovieData />
      <MovieCards 
        posterUrl={movieData.Poster}
        /*
        title={movieData.Title}
        rated={movieData.Rated}
        runtime={movieData.Runtime}
        genre={movieData.Genre}
        plot={movieData.Plot}
        actors={movieData.Actors}
        rating={movieData.imdbRating}*/
      />
    </>
  )
}

export default App;
