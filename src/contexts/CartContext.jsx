import { createContext, useState } from "react";

export const CartContext = createContext();

export const Provider = ({ children }) => {
    const [items, setItems] = useState([
    { name: "Bola", price: 800, quantity: 4}, 
    { name: "Bote", price: 900, quantity: 3},
    ]);
    const clear = () => setItems([]);

    const removeItem = (id) => {
        const filtered = items.filter((item) => item.id !== id);
        setItems(filtered);
    };

    const addItem = (item) => {
        setItems([...items, item]);
    };


    return (
        <CartContext.Provider value={{addItem, clear, items, removeItem}}>
        {children}
        </CartContext.Provider>
    );
}

