import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import MovieDetails from "./MovieDetails";


export default function Modal({isModalOpen, setIsModalOpen, title, movieID, setmovieID}) {

  const [Title, setTitle] = useState();
  const [IMDb, setIMDb] = useState();
  const [Actors, setActors] = useState();
  const [Plot, setPlot] = useState();
  const [Runtime, setRuntime] = useState();
  const [Rating, setRating] = useState();
  const [Genre, setGenre] = useState();
  const [Image, setImage] = useState();

  useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  useEffect(() => {

    const fetchData = async () => {
       
      const url = `https://www.omdbapi.com/?apikey=62c9fe58&i=${movieID}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      setTitle(data.Title);
      setIMDb(data.imdbRating);
      setActors(data.Actors);
      setPlot(data.Plot);
      setRuntime(data.Runtime);
      setRating(data.Rated);
      setGenre(data.Genre);
      setImage(data.Poster)
    };
    fetchData();
}, [movieID]);

  
  return (
    <ReactModal isOpen={isModalOpen}>
      <MovieDetails 
        title={Title}
        imdb={IMDb}
        actors={Actors}
        plot={Plot}
        runtime={Runtime}
        rating={Rating}
        genre={Genre}
        image={Image}
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