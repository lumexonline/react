import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Header from './components/Header';
import products from './components/productsData';

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <Router>
            <Header cartCount={cart.length} />
            <Routes>
                <Route path="/" element={<ProductList products={products} />} />
                <Route path="/product/:id" element={<ProductDetails products={products} addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
                <Route path="/checkout" element={<Checkout cart={cart} />} />
            </Routes>
        </Router>
    );
}

export default App;