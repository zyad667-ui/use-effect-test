import React, { useState } from 'react';
import HeroSections from '../../components/HeroSections'; // 
import ProductCard from '../../components/ProductCard';
const HomePage = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart((prev) => [...prev, product]);
        console.log('Produit ajouté:', product);
    };

    const sampleProducts = [
        {
            id: 1,
            name: "T-shirt Premium",
            price: 29.99,
            image: "https://static.pullandbear.net/assets/public/b346/468c/f8c94317ace4/23900c8b59c2/03241510800-A2M/03241510800-A2M.jpg?ts=1721754201390&w=541&f=auto"
        },
        {
            id: 2,
            name: "Jeans baggy",
            price: 79.99,
            image: "https://static.pullandbear.net/assets/public/bc32/ac0c/15c7446190d6/ff6ae8c3f9fd/03245525800-a4m/03245525800-a4m.jpg?ts=1732529973335&w=541&f=auto"
        },
        {
            id: 3,
            name: "Hoodie",
            price: 49.99,
            image: "https://i.pinimg.com/736x/96/ba/e4/96bae4d00ce806d3b19d3c150bef7e73.jpg"
        },
        {
            "id": 4,
            "name": "Stadium Jacket",
            "price": 179.00,
            "image": "https://i.pinimg.com/736x/d9/9d/72/d99d72da5d944340e2de0095621e8e03.jpg"
        },
        {
            "id": 5,
            "name": "Cargo Pants",
            "price": 159.00,
            "image": "https://i.pinimg.com/736x/6f/4f/b8/6f4fb89845e88b4b1437e2c6dd3512bd.jpg"
        },
        {
            "id": 6,
            "name": "Orange Puffer Jacket",
            "price": 199.00,
            "image": "https://i.pinimg.com/736x/7e/aa/01/7eaa01b7f1ab7c8f886ade093aa3a652.jpg"
        },
        {
            "id": 7,
            "name": "LT Champs Varsity",
            "price": 219.00,
            "image": "https://i.pinimg.com/736x/5c/40/50/5c4050658fe858ce8ba832765a7b2489.jpg"
        },
        {
            "id": 8,
            "name": "Gray Hoodie",
            "price": 99.00,
            "image": "https://i.pinimg.com/736x/a9/f7/fb/a9f7fb562caebb9de22293e0136889dc.jpg"
        },
        {
            "id": 9,
            "name": "Eclipse Track Jacket",
            "price": 149.00,
            "image": "https://i.pinimg.com/736x/e4/14/df/e414df7df8d2581ae931510ffd3060bd.jpg"
        },
        {
            "id": 10,
            "name": "Stitch Anorak Jacket",
            "price": 169.00,
            "image": "https://i.pinimg.com/736x/11/82/4d/11824d787451255d908e3ff9b5e42ad6.jpg"
        }
    ];

    const productGridStyles = {
        padding: '3rem 2rem',
        maxWidth: '1400px',
        margin: '0 auto'
    };

    const titleStyles = {
        textAlign: 'center',
        marginBottom: '3rem',
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#1a1a1a',
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: '1px'
    };

    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        justifyItems: 'center'
    };

    return (
        <main>
            <HeroSections />
            <div style={productGridStyles}>
                <h2 style={titleStyles}>
                    Nos Produits
                </h2>
                <div style={gridStyles}>
                    {sampleProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={handleAddToCart}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default HomePage;