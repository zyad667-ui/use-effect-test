import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

const ProductList = ({ products, onAddToCart }) => (
    <section style={{
        padding: '4rem 2rem 3rem 2rem',
        maxWidth: '1400px',
        margin: '0 auto',
        borderRadius: '32px',
        boxShadow: '0 8px 32px rgba(60, 60, 120, 0.08)',
        background: 'rgba(255,255,255,0.95)',
        marginTop: '3rem',
        marginBottom: '3rem',
    }}>
        <h2 style={{
            textAlign: 'center',
            marginBottom: '3rem',
            fontSize: '2.8rem',
            fontWeight: '800',
            color: '#2d2d4d',
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: '1.5px',
            textShadow: '0 2px 8px rgba(60,60,120,0.08)'
        }}>
            Notre Collection
        </h2>
        {products.length === 0 ? (
            <div style={{
                textAlign: 'center',
                padding: '2rem',
                color: '#666',
                fontSize: '1.1rem'
            }}>
                Aucun produit disponible pour le moment.
            </div>
        ) : (
            <div className="grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem',
                justifyItems: 'center',
                marginTop: '2rem',
                marginBottom: '2rem',
            }}>
                {products.map((product) => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        onAddToCart={onAddToCart} 
                    />
                ))}
            </div>
        )}
    </section>
);

export default ProductList;
