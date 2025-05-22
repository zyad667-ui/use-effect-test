import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

const CollectionPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Always use mock products
        const mockProducts = [
            {
                id: 1,
                name: "T-shirt oversize unisexe",
                price: 29.99,
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop"
            },
            {
                id: 2,
                name: "Jean slim fit homme",
                price: 49.99,
                image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=300&h=300&fit=crop"
            },
            {
                id: 3,
                name: "Robe d'été fleurie",
                price: 39.99,
                image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop"
            },
            {
                id: 4,
                name: "Sweat à capuche classique",
                price: 59.99,
                image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=300&h=300&fit=crop"
            },
            {
                id: 5,
                name: "Jupe plissée femme",
                price: 34.99,
                image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop"
            }
        ];
        setProducts(mockProducts);
    }, []);

    const handleAddToCart = (product) => {
        alert(`Produit ajouté : ${product.name}`);
    };

    return (
        <main style={{
            minHeight: '100vh',
            background: 'linear-gradient(120deg, #f8fafc 0%, #e0e7ff 100%)',
            padding: 0,
        }}>
            <ProductList products={products} onAddToCart={handleAddToCart} />
        </main>
    );
};

export default CollectionPage;