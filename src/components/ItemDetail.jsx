import { Container } from "react-bootstrap";
import { ItemCount } from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ product }) => {

  const {addItem} = useContext(CartContext);

  const add = (quantity) => {
    addItem(product, quantity);
  };

  return (
    <Container className='mt-4'>
      <h1>{product.name}</h1>
      <p>{product.detail}</p>
      <img src={product.img} style={{ height: 450, width: "auto" }} alt={product.name} />
      <div>{`Stock ${product.stock}`}</div>
      <div>{`Precio ${product.price}`}</div>
      <ItemCount stock={product.stock} onAdd={add} />
    </Container>
  )
};