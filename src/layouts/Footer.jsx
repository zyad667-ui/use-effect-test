import React from 'react';
import styles from './Footermodules.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.logoSection}>
                    <span className={styles.logo}>EBrand</span>
                </div>
                <nav className={styles.navLinks}>
                    <a href="/">Home</a>
                    <a href="/collection">Collection</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav>
                <div className={styles.socialLinks}>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
                <div className={styles.contact}>
                    <a href="mailto:contact@ebrand.com">contact@ebrand.com</a>
                    <span> | </span>
                    <a href="/mentions-legales">Mentions légales</a>
                </div>
            </div>
            <p className={styles.copyright}>&copy; {new Date().getFullYear()} EBrand. Tous droits réservés.</p>
        </footer>
    );
};

export default Footer;
