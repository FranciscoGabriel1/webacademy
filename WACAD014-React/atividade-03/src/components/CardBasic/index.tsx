import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Movie } from '../../types/index';


function CardBasic(props: Movie) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.overview}
        </Card.Text>
        <Button variant="primary">Ver detalhes</Button>
      </Card.Body>
    </Card>
  );
}

export default CardBasic;