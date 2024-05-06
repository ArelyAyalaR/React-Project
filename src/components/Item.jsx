import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({product}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height="250" src={product.img}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.detail}</Card.Text>
        <Card.Text>{product.category}</Card.Text>
        <Link to={`/item/${product.id}`}><Button variant="primary">Detalles</Button></Link>
      </Card.Body>
    </Card>
  )
};