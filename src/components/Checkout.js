import React from 'react';

function Checkout({ cart }) {
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div>
            <h1>Checkout</h1>
            <p>Total: ${total}</p>
            <button onClick={() => alert('Order placed!')}>Place Order</button>
        </div>
    );
}

export default Checkout;