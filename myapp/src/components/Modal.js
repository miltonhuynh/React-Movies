import { useEffect, useState } from "react";
import ReactModal from "react-modal";


export default function Modal({isModalOpen, setIsModalOpen,posterUrl, title}) {

  const [movieDetails, setmovieDetails] = useState();
  useEffect(() => {
    ReactModal.setAppElement("body");

    const fetchData = async () => {
      const url = `https://www.omdbapi.com/?apikey=62c9fe58&t=${title}`;
      const response = await fetch(url);
      const data = await response.json();
      setmovieDetails(data);
    };
    fetchData(); 
  }, []);

  console.log(movieDetails);
 
  return (
    <ReactModal isOpen={isModalOpen}>
      <div className="Modal-TitleBar">
        <div id="container">
            <div className="image">
                <img src={posterUrl}></img>
            </div>
            <div id="MovieInfo">
                <div id="MovieTitle">Title: {null}</div>
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