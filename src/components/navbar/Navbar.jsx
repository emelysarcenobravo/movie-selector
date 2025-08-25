import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
    <nav className = "navbar">
        <h1>Movie Selector</h1>
        <div className="navbar_links">
            <a href="#now_playing">Now Playing</a>
            <a href="#popular">Popular</a>
            <a href="#top_rated">Top Rated</a>
            <a href="#upcoming">Upcoming Releases</a>
        </div>
    </nav>
    );
};

export default Navbar;