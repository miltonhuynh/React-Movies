import React from 'react'
import {useState, useEffect} from 'react'
import Modal from './Modal';

export default function MovieCard(props) {

  const [movieData, setmovieData] = useState({});
  const [error, seterror] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const clicked = () => {
    props.setIsModalOpen(true);
  }

  return (
    <>
      <div id="CardContainer">
          <img id="CardImage" src={props.posterUrl} onClick={clicked}></img>
          <div id="CardTitle">{props.title}</div>
          <div id="MovieTag">Movie</div>
      </div>
</>
  )
}
