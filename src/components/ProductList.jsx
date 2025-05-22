import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css'; 

const ProductList = ({ onAddToCart }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/products')
            .then((res) => {
                if (!res.ok) throw new Error('Erreur lors du chargement des produits');
                return res.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className={styles.status}>Chargement...</div>;
    if (error) return <div className={styles.status}>{error}</div>;

    return (
        <div className={styles.grid}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};

export default ProductList; 