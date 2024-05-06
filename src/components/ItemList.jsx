import { Item } from "./Item"

/* eslint-disable react/prop-types */
export const ItemList = ({ products }) => {
    return (
        <div className="d-flex">
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
};
