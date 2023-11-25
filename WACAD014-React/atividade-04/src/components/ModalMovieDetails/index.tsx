import React, { useState } from "react";
import { Modal, Form, Card, Col, Row } from "react-bootstrap";
import { MovieDetails } from "../../types";
import moment from "moment";

interface ModalMovieDetailsProps {
  showModal: boolean;
  handleCloseModal: () => void;
  selectedMovie: MovieDetails | null;
}

const ModalMovieDetails: React.FC<ModalMovieDetailsProps> = ({
  showModal,
  handleCloseModal,
  selectedMovie,
}) => {
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);

  const renderFormItem = (
    label: string,
    value: string | number | undefined
  ) => (
    <>
      <Form.Text id="media" style={{ color: "#e5e5e5" }}>
        <strong>{label}:</strong> {value}
      </Form.Text>
      <br />
    </>
  );

  const handleAddToFavorites = (movie: MovieDetails) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    // Verifica se o filme já está nos favoritos
    const isMovieInFavorites = favorites.some(
      (fav: MovieDetails) => fav.id === movie.id
    );

    if (!isMovieInFavorites) {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsAddedToFavorites(true);
      alert("Filme adicionado aos Favoritos!");
    } else {
      alert("Este filme já está nos Favoritos!");
    }
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} size="lg">
      {selectedMovie && (
        <>
          <Modal.Header
            closeButton
            style={{ color: "#e5e5e5", backgroundColor: "#282A36" }}
          >
            <Modal.Title>{selectedMovie.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#282A36" }}>
            <Row>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Card.Img
                  variant="top"
                  style={{ height: 350, width: "auto" }}
                  src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
                />
              </Col>
              <Col>
                {" "}
                {renderFormItem(
                  "Média de avaliações",
                  selectedMovie.vote_average
                )}
                {renderFormItem(
                  "Número total de avaliações",
                  selectedMovie.vote_count
                )}
                {renderFormItem("Popularidade", selectedMovie.popularity)}
                {renderFormItem("Descrição", selectedMovie.overview)}
                {renderFormItem("Tagline", selectedMovie.tagline)}
                {renderFormItem(
                  "Data de Lançamento",
                  moment(selectedMovie.release_date).format("DD/MM/YYYY")
                )}
                {renderFormItem(
                  "Duração do filme",
                  selectedMovie.runtime + " min"
                )}
                {renderFormItem(
                  "Gênero",
                  selectedMovie.genres?.map((genre) => genre.name).join(", ")
                )}
                {renderFormItem(
                  "Receita gerada R$ ",
                  selectedMovie.revenue.toLocaleString("pt-BR")
                )}
                {renderFormItem("Imbd", selectedMovie.imdb_id)}
              </Col>
            </Row>
            <Row>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToFavorites(selectedMovie)}
                  disabled={isAddedToFavorites}
                >
                  {isAddedToFavorites
                    ? "Já adicionado aos Favoritos"
                    : "Adicionar aos Favoritos"}
                </button>
              </Col>
            </Row>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
};

export default ModalMovieDetails;
