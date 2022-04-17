import React from 'react'
import MovieCard from './MovieCard';

export default function MovieList(props) {

    const arr = props.list.map((single) => 
    <MovieCard
        posterUrl={single.Poster}
        title={single.Title}
        type={single.Type}
    />
    );
  return (
    <div id="MovieList">{arr}</div>
  )
}
