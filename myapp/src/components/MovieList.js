import React from 'react'
import MovieCard from './MovieCard';

export default function MovieList({Title, list, isModalOpen, setIsModalOpen, movieID, setmovieID}) {
    const list_of_movies = list.map((single) => 
      <MovieCard
          posterUrl={single.Poster}
          title={single.Title}
          type={single.Type}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          movieID={single.imdbID}
          setmovieID={setmovieID}
      />
    );

  return (
    <div id="MovieList">
      {list_of_movies}
    </div>
  )
}
