import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import MovieCards from './MovieCards.js';
import GetMovieData from './GetMovieData.js';

function App() {
  return (
    <>
      <GetMovieData/>
      <MovieCards 
        posterUrl={GetMovieData.movieData.Poster}
        title={GetMovieData.movieData.Title}
        rated={GetMovieData.movieData.Rated}
        runtime={GetMovieData.movieData.Runtime}
        genre={GetMovieData.movieData.Genre}
        plot={GetMovieData.movieData.Plot}
        actors={GetMovieData.movieData.Actors}
        rating={GetMovieData.movieData.imdbRating}
      />
    </>
  )
}

export default App;
