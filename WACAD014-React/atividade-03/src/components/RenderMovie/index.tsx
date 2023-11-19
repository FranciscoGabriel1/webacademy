import { useState } from "react";
import { Card } from "react-bootstrap";
import { getMovieDetails } from "../../api";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import { MovieDetails } from "../../types";
import ModalMovieDetails from "../ModalMovieDetails";

const RenderMovie = ({ movies }: any) => {
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = async (movieId: any) => {
    const details = await getMovieDetails(movieId);
    setSelectedMovie(details);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <ResponsiveCarousel
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        infiniteLoop
        centerMode
        centerSlidePercentage={100 / 6}
        useKeyboardArrows
        autoFocus
        autoPlay
      >
        {movies.map((movie: any) => (
          <div
            key={movie.id}
            onClick={() => handleOpenModal(movie.id)}
            style={{ width: "100%" }}
          >
            <Card.Img
              variant="top"
              style={{ height: 300, width: "auto" }}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          </div>
        ))}
      </ResponsiveCarousel>

      <ModalMovieDetails
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        selectedMovie={selectedMovie}
      />
    </>
  );
};

export default RenderMovie;
