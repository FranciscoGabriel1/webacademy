import React from "react";
import { Modal, Form, Card, Col, Row } from "react-bootstrap";
import { MovieDetails } from "../../types";

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
                  selectedMovie.release_date
                )}
                {renderFormItem("Duração do filme", selectedMovie.runtime)}
                {renderFormItem(
                  "Gênero",
                  selectedMovie.genres?.map((genre) => genre.name).join(", ")
                )}
                {renderFormItem("Receita gerada", selectedMovie.revenue)}
                {renderFormItem("Imbd", selectedMovie.imdb_id)}
              </Col>
            </Row>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
};

export default ModalMovieDetails;
