export default function MovieCards(props) {
    return (
        <div>
    <div>Poster url: <img src={props.posterUrl}></img></div>
    <div>Title: {props.title}</div>
    <div>Rated: {props.rated}</div>
    <div>Run-time: {props.runtime}</div>
    </div>
    );
}