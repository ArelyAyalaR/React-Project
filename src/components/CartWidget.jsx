import cart from '../assets/cart.png';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
    return (
    <Link to="/cart">
        <img src={cart} alt="Cart" width={40}/>
        <span>89</span>
    </Link>
    );
};