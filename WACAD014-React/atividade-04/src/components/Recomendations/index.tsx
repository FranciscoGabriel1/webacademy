import { useEffect, useState } from "react";
import { getRecommendedMovies } from "../../api";
import { Movie } from "../../types";
import RenderMovie from "../RenderMovie";
import { Container, Row } from "react-bootstrap";
import CustomNavbar from "../NavBar";
import Typography from "../Typography";

const Recommendations: React.FC = () => {
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  useEffect(() => {
    const fetchRecommendations = async () => {
      const recommendations: Movie[] = [];

      // Usando uma variável auxiliar para evitar a modificação direta do estado
      for (const favorite of favorites) {
        const recMovies = await getRecommendedMovies(favorite.id);
        recommendations.push(...recMovies);
        console.log("favorite.id: ", favorite.id);
      }

      // Verificando se há alguma diferença antes de atualizar o estado
      if (
        JSON.stringify(recommendedMovies) !== JSON.stringify(recommendations)
      ) {
        setRecommendedMovies(recommendations);
      }
    };

    fetchRecommendations();
  }, [favorites, recommendedMovies]); // Adicionando recommendedMovies como dependência

  return (
    <Container style={{ marginTop: 0 }}>
      <CustomNavbar />
      <Row style={{ marginTop: 76 }}>
        <Typography title="Novidades da Netflix" />
        <RenderMovie movies={recommendedMovies} />
      </Row>
    </Container>
  );
};

export default Recommendations;
