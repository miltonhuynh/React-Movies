import React from 'react'
import MovieCard from './MovieCard';

export default function MovieList(props) {

    const list_of_movies = props.list.map((single) => 
    <MovieCard
        posterUrl={single.Poster}
        title={single.Title}
        type={single.Type}
    />
    );
  return (
    <div id="MovieList">{list_of_movies}</div>
  )
}
