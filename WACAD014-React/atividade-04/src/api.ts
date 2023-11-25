/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const apiKey = "1fb26ac87aa6ff0175b0c78443858dba";
const apiUrl = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${apiUrl}/movie/popular?api_key=${apiKey}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Erro ao obter filmes populares:", error);
  }
};

export const getMovieDetails = async (id?: number) => {
  try {
    const response = await axios.get(
      `${apiUrl}/movie/${id}?api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error(`Erro ao obter detalhes do filme ${id}:`, error);
  }
};

export const getTopRatedMovies = async () => {
  try {
    const response = await axios.get(
      `${apiUrl}/movie/top_rated?api_key=${apiKey}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Erro ao obter filmes mais curtidos:", error);
  }
};

export const getMoviesByGenre = async (genreId: any) => {
  try {
    const response = await axios.get(
      `${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=${genreId}`
    );
    return response.data.results;
  } catch (error) {
    console.error(`Erro ao obter filmes do gênero ${genreId}:`, error);
  }
};

export const getRecommendedMovies = async (movieId: any) => {
  try {
    const response = await axios.get(
      `${apiUrl}/movie/${movieId}/recommendations?api_key=${apiKey}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Erro ao obter filmes recomendados:", error);
  }
};
