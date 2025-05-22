import React from 'react';
import '../styles/ProductCard.css'; 

const ProductCard = ({ product, onAddToCart }) => (
    <div className="card"> {}
        <img
            src={product?.image || "/api/placeholder/300/200"}
            alt={product?.name || "Product"}
            className="image"
        />
        <h3 className="name">{product?.name || "Produit"}</h3>
        <p className="price">{product?.price || "0"} €</p>
        <button className="button" onClick={() => onAddToCart(product)}>
            Ajouter au panier
        </button>
    </div>
);

export default ProductCard;
