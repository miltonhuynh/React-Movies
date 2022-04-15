import React from 'react'

export default function MovieDetails(props) {
    return (
    <div id="container">
        <div className="image">
            <img src={props.posterUrl}></img>
        </div>
        <div id="MovieInfo">
            <div id="MovieTitle">{props.title}</div>
            <div id="imdb">{props.rating}</div>
            <div id="Buttons">
                <div className="GrayBg">{props.rated}</div>
                <div className="GrayBg">{props.runtime}</div>
                <div className="GrayBg">{props.genre}</div>
            </div>
            <div><b>Plot</b><br/>{props.plot}</div>
            <div><b>Actors: </b><br/>{props.actors}</div>
        </div>
    </div>
    );
}