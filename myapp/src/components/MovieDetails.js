import React from 'react'

export default function MovieDetails({title,imdb,actors,plot,runtime,rating,genre,image}) {

  return (
    <div className="Modal-TitleBar">
        <div id="container">
            <div className="image">
                <img src={image}></img>
            </div>
            <div id="MovieInfo">
                <div id="MovieTitle">Title: {title}</div>
                <div id="imdb">IMDb score: {imdb}</div>
                <div id="Buttons">
                    <div className="GrayBg">{runtime}</div>
                    <div className="GrayBg">{rating}</div>
                    <div className="GrayBg">{genre}</div>
                </div>
                <div><b>Plot: {plot}</b><br/>{null}</div>
                <div><b>Actors: {actors}</b><br/>{null}</div>
            </div>
        </div>
      </div>
  )
}
