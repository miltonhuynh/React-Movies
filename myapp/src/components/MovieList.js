import React from 'react'
import MovieCard from './MovieCard';

export default function MovieList({Title, list, isModalOpen, setIsModalOpen}) {
    const list_of_movies = list.map((single) => 
      <MovieCard
          posterUrl={single.Poster}
          title={single.Title}
          type={single.Type}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
      />
    );
  return (
    <div id="MovieList">
      {list_of_movies}
    </div>
  )
}
