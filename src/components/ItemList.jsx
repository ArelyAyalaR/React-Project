import { Item } from "./Item"
import { Row, Col } from 'react-bootstrap';
/* eslint-disable react/prop-types */
// export const ItemList = ({ products }) => {
//     return (
//         <div className="d-flex">
//             {products.map((product) => (
//                 <Item key={product.id} product={product} />
//             ))}
//         </div>
//     );
// };';

export const ItemList = ({ products }) => {
    return (
        <Row>
            {products.map((product) => (
                <Col key={product.id} xs={12} sm={6} md={3}>
                    <Item product={product} />
                </Col>
            ))}
        </Row>
    );
};

