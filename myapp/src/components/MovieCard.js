import React from 'react'

export default function MovieCard({posterUrl, title, setIsModalOpen, movieID, setmovieID}) {
  
  const clicked = () => {
    setIsModalOpen(true);
    setmovieID(movieID);
    }

  return (
    <>
      <div id="CardContainer">
          <img id="CardImage" src={posterUrl} onClick={clicked} alt="Movie Art"></img>
          <div id="CardTitle">{title}</div>
          <div id="MovieTag">Movie</div>
      </div>
      {/*Send title data to Modal to fetch movie details*/}
    </>
  )
}
