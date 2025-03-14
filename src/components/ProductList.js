import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ products }) {
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>{product.name}</Link> - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;