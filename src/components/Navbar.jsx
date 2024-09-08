import React, { useState } from 'react';
import "../css/components/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="nav">
            <nav className="main">
                <nav className="logo">
                    <Link to="/" className='a'>Team 71</Link>
                </nav>
                <button className="menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? 'Close' : 'Menu'}
                </button>
                <ul className={isMenuOpen ? 'open' : ''}>
                    <li><Link to ="/home" className='a'>Home</Link></li>
                    <li><Link to ="/about" className='a'>About</Link></li>
                    <li><Link to ="/contact" className='a'>Contact</Link></li>
                    <li><Link to="/price" className='a'>Price</Link></li>
                    <li className="login"><Link to ="/login" className='a'>Login</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
