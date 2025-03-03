import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails({ products, addToCart }) {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) return <h2>Product not found</h2>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}

export default ProductDetails;