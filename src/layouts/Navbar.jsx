import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import LoginModal from '../components/LoginModal';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const openLogin = () => {
        setIsLoginOpen(true);
        closeMenu();
    };

    const closeLogin = () => {
        setIsLoginOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>EBrand</div>

            <div className={styles.hamburger} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`${styles.links} ${isMenuOpen ? styles.active : ''}`}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/collections" onClick={closeMenu}>Collections</Link></li>
                <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                <li><button onClick={openLogin} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', font: 'inherit' }}>Login</button></li>
            </ul>
            <LoginModal isOpen={isLoginOpen} onClose={closeLogin} />
        </nav>
    );
};

export default Navbar;