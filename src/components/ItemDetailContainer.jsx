import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getFirestore, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        const db = getFirestore();
        
        const refDoc = doc(db, "items", id);

        getDoc(refDoc).then((snapshot) =>{
            setProduct({id: snapshot.id, ...snapshot.data()});
        });
    }, [id]);

    if(!product) return <div>Loading</div>;

    return (
        <Container className='mt-4'>
            <h1>{product.name}</h1>
            <p>{product.detail}</p>
            <img src={product.img} style={{height:450, width: "auto"}} alt={product.name}/>
            <div>{`Stock ${product.stock}`}</div>
            <div>{`Precio ${product.price}`}</div>
        </Container>
    );
};
