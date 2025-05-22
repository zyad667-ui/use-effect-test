import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/ProductList.css';

const CollectionPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/products.json')
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

    const handleAddToCart = (product) => {
        // À adapter selon la logique globale du panier
        alert(`Produit ajouté : ${product.name}`);
    };

    if (loading) return <div className="product-list-loading">Chargement...</div>;
    if (error) return <div className="product-list-error">{error}</div>;

    return (
        <main>
            <section className="product-list-section">
                <h2 className="product-list-title">Notre Collection</h2>
                <div className="product-list-grid">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default CollectionPage; 