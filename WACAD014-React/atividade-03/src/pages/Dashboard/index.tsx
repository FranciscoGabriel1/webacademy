import  {useEffect, useState} from 'react';
import axios from "axios";
import CardBasic from '../../components/CardBasic/index';
import Carousel from '../../components/Carousel/index';
import { Movie } from '../../types/index';

const Dashboard: React.FC = () => {

const [movies, setMovies] = useState<Movie>([]);

useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/157336?api_key=45a661ec36028f10352bfea959c32a79&append_to_response=videos,images")
      .then((response) => setMovies(response.data))
      .catch((error) => console.error("Erro ao buscar dados da API:", error));
  }, []);

  console.log("movies: ", movies)

  return (
  <div>
   

   <Carousel>
     <CardBasic title={movies.title} overview={movies.overview} poster_path={movies.poster_path}/>
      <CardBasic title={movies.title} overview={movies.overview} poster_path={movies.poster_path}/>
       <CardBasic title={movies.title} overview={movies.overview} poster_path={movies.poster_path}/>
        <CardBasic title={movies.title} overview={movies.overview} poster_path={movies.poster_path}/>
   </Carousel>

 
  </div>
);
}

export default Dashboard;