import React, { useState } from 'react';
import HeroSection from '../../components/HeroSections';
import ProductList from '../../components/ProductCard';

const HomePage = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart((prev) => [...prev, product]);
    };

    return (
        <main>
            <HeroSection />
            <ProductList onAddToCart={handleAddToCart} />
        </main>
    );
};

export default HomePage;
