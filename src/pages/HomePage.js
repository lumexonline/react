import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Welcome to the Store</h1>
            <Link to="/product/1">View Product 1</Link>
        </div>
    );
}

export default HomePage;