import React from 'react';
import '../styles/navbar.css'
import preachLogo from '../images/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="navBar">
            <div className="navWrapper">
                <div>
                    <Link to={'/'} className="logo">
                        <img src={preachLogo} alt='logo' />
                    </Link>
                </div>
                <nav>
                    <ul>
                        <Link to={'/'}>Home</Link>
                        <li>Favourites</li>
                        <li>Trending</li>
                    </ul>
                </nav>
            </div>
            <div className="navOptions">
                <input type="search" placeholder='Search for TV Shows' />
            </div>
        </header>
    );
};

export default NavBar;
