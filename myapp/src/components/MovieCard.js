import React from 'react'
import {useState, useEffect} from 'react'
import MovieDetails from './MovieDetails';

export default function MovieCard(props) {

  const [movieData, setmovieData] = useState({});
  const [error, seterror] = useState(null);

  const clicked = () => {
    return (
      console.log('clicked')
    )
  }

  return (
    <div id="CardContainer">
        <img id="CardImage" src={props.posterUrl} onClick={clicked}></img>
        <div id="CardTitle">{props.title}</div>
        <div id="MovieTag">Movie</div>
    </div>
  )
}
