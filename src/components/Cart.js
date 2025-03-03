import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cart, removeFromCart }) {
    return (
        <div>
            <h1>Cart</h1>
            {cart.length === 0 ? <p>Your cart is empty.</p> : (
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            {cart.length > 0 && <Link to="/checkout">Proceed to Checkout</Link>}
        </div>
    );
}

export default Cart;