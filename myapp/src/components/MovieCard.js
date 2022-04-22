import React from 'react'
import {useState, useEffect} from 'react'
import Modal from './Modal';

export default function MovieCard({posterUrl, title, setIsModalOpen}) {

  const clicked = () => {
    setIsModalOpen(true);
  }

  return (
    <>
      <div id="CardContainer">
          <img id="CardImage" src={posterUrl} onClick={clicked}></img>
          <div id="CardTitle">{title}</div>
          <div id="MovieTag">Movie</div>
      </div>
      {/*Send title data to Modal to fetch movie details*/}
      <Modal title={title}/>
    </>
  )
}
