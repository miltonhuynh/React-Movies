import { useEffect } from "react";
import ReactModal from "react-modal";


export default function Modal({isModalOpen, setIsModalOpen,posterUrl, title, rating, rated, runtime, genre, plot, actors}) {
  useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  return (
    <ReactModal isOpen={isModalOpen}>
      <div className="Modal-TitleBar">
        <div className="Modal-Title">Movie Details!</div>
        <div id="container">
            <div className="image">
                <img src={posterUrl}></img>
            </div>
            <div id="MovieInfo">
                <div id="MovieTitle">{title}</div>
                <div id="imdb">IMDb score: {rating}</div>
                <div id="Buttons">
                    <div className="GrayBg">{rated}</div>
                    <div className="GrayBg">{runtime}</div>
                    <div className="GrayBg">{genre}</div>
                </div>
                <div><b>Plot</b><br/>{plot}</div>
                <div><b>Actors: </b><br/>{actors}</div>
            </div>
        </div>
        <div
          className="Modal-CloseButtonWrapper"
          onClick={() => setIsModalOpen(false)}
        >
          X
        </div>
      </div>
    </ReactModal>
  );
}