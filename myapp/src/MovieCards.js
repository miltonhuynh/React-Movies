export default function MovieCards(props) {
    return (
    <div id="container">
        <div class="image">
            <img src={props.posterUrl}></img>
        </div>
        <div id="MovieInfo">
            <div id="MovieTitle">{props.title}</div>
            <div id="Buttons">
                <div class="GrayBg">{props.rated}</div>
                <div class="GrayBg">{props.runtime}</div>
                <div class="GrayBg">{props.genre}</div>
            </div>
            <div>Plot: {props.plot}</div>
            <div>Actors: {props.actors}</div>
            <div>Imdb Rating: {props.rating}</div>
        </div>
    </div>
    );
}