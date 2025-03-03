import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

const products = [
    { id: '1', name: 'Product 1', price: 100 },
];

function ProductPage() {
    const { id } = useParams();
    const product = products.find(p => p.id === id);

    useEffect(() => {
        if (product) {
            trackEvent('view_item', {
                item_id: product.id,
                item_name: product.name,
                price: product.price,
                currency: 'USD'
            });
        }
    }, [product]);

    const handleAddToCart = () => {
        trackEvent('add_to_cart', {
            currency: 'USD',
            value: product.price,
            items: [{
                item_id: product.id,
                item_name: product.name,
                price: product.price
            }]
        });
    };

    return product ? (
        <div>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <Link to="/checkout">Go to Checkout</Link>
        </div>
    ) : <p>Product not found</p>;
}

export default ProductPage;