import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';

const ItemCount = () => {
  const { state, setState} = useContext(CartContext);

  const [count, setCount] = React.useState(state);
  const handleAddProduct = () => {
    setCount(count + 1);
    setState(count + 1);
  };

  const handleRemoveProduct = () => {
    setCount(count - 1);
    setState(count + 1);
  };

  return (
    <div>
      <Button onClick={handleAddProduct}>+</Button>
      <input type="number" value={count}/>
      <Button onClick={handleRemoveProduct}>-</Button>
    </div>
  );
};

export default ItemCount;