import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import MovieDetails from "./MovieDetails";


export default function Modal({isModalOpen, setIsModalOpen, title}) {

  const [movieDetails, setmovieDetails] = useState();

  useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  
  return (
    <ReactModal isOpen={isModalOpen}>
      <MovieDetails title={title}/>
        <div
            className="Modal-CloseButtonWrapper"
            onClick={() => setIsModalOpen(false)}
          >
            X
        </div>
    </ReactModal>
  );
}