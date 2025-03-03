import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartCount }) {
    return (
        <header style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
            <Link to="/">Home</Link> | 
            <Link to="/cart"> Cart ({cartCount})</Link>
        </header>
    );
}

export default Header;