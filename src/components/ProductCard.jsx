import React from 'react';
import styles from '../styles/ProductCard.module.css'; // Assuming you have a CSS module for styling

const ProductCard = ({ product, onAddToCart }) => (
    <div className={styles.card}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>{product.price} €</p>
        <button className={styles.button} onClick={() => onAddToCart(product)}>
            Ajouter au panier
        </button>
    </div>
);

export default ProductCard; 