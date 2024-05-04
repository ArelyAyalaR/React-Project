import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidgetComponent = () => {

    const {state} = useContext(CartContext);
    const iconStyles = {
        fontSize: '1.3rem',
        paddingRight: '9px'
    }
    return (
        <div>
            <FontAwesomeIcon style={iconStyles} icon={faCartShopping} />
            <span style={{ fontSize: '1.3rem' }}>{state}</span>
        </div>
    )
};

export default CartWidgetComponent;