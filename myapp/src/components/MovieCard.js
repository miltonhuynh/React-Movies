import { data } from 'browserslist';
import React from 'react'
import {useState, useEffect} from 'react'
import Modal from './Modal';
import MovieDetails from './MovieDetails';

export default function MovieCard({posterUrl, title, setIsModalOpen}) {
  const [movieDetails, setmovieDetails] = useState();
  
  const clicked = () => {
    setIsModalOpen(true);
    
    const fetchData = async () => {
      const url = `https://www.omdbapi.com/?apikey=62c9fe58&t=${title}`;
      const response = await fetch(url);
      const data = await response.json();
      setmovieDetails(data);
    };
    fetchData(); 
    console.log(movieDetails);
    <Modal title={2}/>
  }

  return (
    <>
      <div id="CardContainer">
          <img id="CardImage" src={posterUrl} onClick={clicked}></img>
          <div id="CardTitle">{title}</div>
          <div id="MovieTag">Movie</div>
      </div>
      {/*Send title data to Modal to fetch movie details*/}
    </>
  )
}
