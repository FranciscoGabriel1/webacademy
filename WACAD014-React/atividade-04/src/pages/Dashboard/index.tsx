import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import {
  getMoviesByGenre,
  getPopularMovies,
  getTopRatedMovies,
} from "../../api";
import RenderMovie from "../../components/RenderMovie";
import Typography from "../../components/Typography";

function Dashboard() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const movies = await getPopularMovies();
      setPopularMovies(movies);
    };

    const fetchTopRatedMovies = async () => {
      const movies = await getTopRatedMovies();
      setTopRatedMovies(movies);
    };

    const fetchMoviesByGenre = async (genreId: any, setStateFunction: any) => {
      const movies = await getMoviesByGenre(genreId);
      setStateFunction(movies);
    };

    fetchPopularMovies();
    fetchTopRatedMovies();
    fetchMoviesByGenre(35, setComedyMovies);
    fetchMoviesByGenre(28, setActionMovies);
    fetchMoviesByGenre(12, setAdventureMovies);
    fetchMoviesByGenre(10749, setRomanceMovies);
  }, []);

  return (
    <Container>
      <Row style={{ marginTop: 40 }}>
        <Typography title="Novidades da Netflix" />
        <RenderMovie movies={popularMovies} />
      </Row>

      <Row style={{ marginTop: 40 }}>
        <Typography title="Filmes mais curtidos" />
        <RenderMovie movies={topRatedMovies} />
      </Row>

      <Row style={{ marginTop: 40 }}>
        <Typography title="Filmes de comédia" />
        <RenderMovie movies={comedyMovies} />
      </Row>

      <Row style={{ marginTop: 40 }}>
        <Typography title="Filmes de ação" />
        <RenderMovie movies={actionMovies} />
      </Row>

      <Row style={{ marginTop: 40 }}>
        <Typography title="Filmes de aventura" />
        <RenderMovie movies={adventureMovies} />
      </Row>

      <Row style={{ marginTop: 40 }}>
        <Typography title="Filmes de romance" />
        <RenderMovie movies={romanceMovies} />
      </Row>
    </Container>
  );
}

export default Dashboard;
