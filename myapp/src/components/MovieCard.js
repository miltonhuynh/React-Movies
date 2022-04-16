import React from 'react'

export default function MovieCard(props) {
  return (
    <div id="CardContainer">
        <img id="CardImage" src={props.posterUrl}></img>
        <div id="CardTitle">{props.title}</div>
        <div id="MovieTag">Movie</div>
    </div>
  )
}
