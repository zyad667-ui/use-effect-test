import React from 'react';
import styles from './Footermodules.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} EBrand. Tous droits réservés.</p>
        </footer>
    );
};

export default Footer;
