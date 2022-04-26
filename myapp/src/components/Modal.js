import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import MovieDetails from "./MovieDetails";


export default function Modal({isModalOpen, setIsModalOpen, title, movieID, setmovieID}) {

  const [movieDetails, setmovieDetails] = useState();
  const [Title, setTitle] = useState();
  const [IMDb, setIMDb] = useState();

  useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  useEffect(() => {

    const fetchData = async () => {
       
      const url = `https://www.omdbapi.com/?apikey=62c9fe58&i=${movieID}`;
      const response = await fetch(url);
      const data = await response.json();
      setTitle(data.Title);
      setIMDb(data.IMDb);
    };
    fetchData();
}, [movieID]);

  
  return (
    <ReactModal isOpen={isModalOpen}>
      <MovieDetails 
        title={Title}
        imdb={IMDb}
      />
        <div
            className="Modal-CloseButtonWrapper"
            onClick={() => setIsModalOpen(false)}
          >
            X
        </div>
    </ReactModal>
  );
}