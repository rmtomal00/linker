import React, { useState, useEffect, useContext } from 'react';
import "../css/components/Navbar.css";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isLogin, setLoginEnable, setLoginDisable } = useContext(AuthContext);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Check for the token in cookies once when the component mounts
    useEffect(() => {
        const getToken = Cookies.get('team71.link');
        if (getToken) {
            fetch("http://192.168.2.106:2056/api/v1/auth/token-check",{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    token: getToken
                })
            }).then((resonse)=> resonse.json())
            .then((result)=>{
                if (result.err) {
                    setLoginDisable()
                    Cookies.remove("team71.link")
                }else{
                    setLoginEnable()
                }
            }).catch((error)=>console.log(error))
            
        }
    }, [setLoginEnable, setLoginDisable]);  // Empty dependency array ensures this runs only once after mounting

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
                    <li><Link to ="/home" className='a' onClick={toggleMenu}>Home</Link></li>
                    <li><Link to ="/about" className='a'onClick={toggleMenu}>About</Link></li>
                    <li><Link to ="/contact" className='a'onClick={toggleMenu}>Contact</Link></li>
                    <li><Link to="/price" className='a'onClick={toggleMenu}>Price</Link></li>
                    {!isLogin ? (
                        <li className="login"><Link to ="/login" className='a'onClick={toggleMenu}>Login</Link></li>
                    ) : (
                        <li className="login"><Link to ="/dashboard" className='a'onClick={toggleMenu}>Dashboard</Link></li>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
