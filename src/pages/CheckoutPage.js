import React, { useEffect } from 'react';
import { trackEvent } from '../utils/analytics';

function CheckoutPage() {
    const cart = [{ id: '1', name: 'Product 1', price: 100 }];

    useEffect(() => {
        trackEvent('begin_checkout', {
            currency: 'USD',
            value: cart.reduce((total, item) => total + item.price, 0),
            items: cart.map(item => ({
                item_id: item.id,
                item_name: item.name,
                price: item.price
            }))
        });
    }, [cart]);

    const handleCompletePurchase = () => {
        trackEvent('purchase', {
            transaction_id: 'order_' + Date.now(),
            currency: 'USD',
            value: cart.reduce((total, item) => total + item.price, 0),
            items: cart.map(item => ({
                item_id: item.id,
                item_name: item.name,
                price: item.price
            }))
        });
    };

    return (
        <div>
            <h2>Checkout</h2>
            <button onClick={handleCompletePurchase}>Complete Purchase</button>
        </div>
    );
}

export default CheckoutPage;