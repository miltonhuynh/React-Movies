import React from 'react'

export default function MovieDetails({title}) {
    
  return (
    <div className="Modal-TitleBar">
        <div id="container">
            <div className="image">
                <img src={null}></img>
            </div>
            <div id="MovieInfo">
                <div id="MovieTitle">Title: {title}</div>
                <div id="imdb">IMDb score: {null}</div>
                <div id="Buttons">
                    <div className="GrayBg">{null}</div>
                    <div className="GrayBg">{null}</div>
                    <div className="GrayBg">{null}</div>
                </div>
                <div><b>Plot</b><br/>{null}</div>
                <div><b>Actors: </b><br/>{null}</div>
            </div>
        </div>
      </div>
  )
}
