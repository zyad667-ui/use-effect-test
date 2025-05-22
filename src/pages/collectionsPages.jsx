import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/ProductList.css';

const CollectionPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [apiResponse, setApiResponse] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            console.log('Starting API fetch...');
            
            const url = 'https://asos10.p.rapidapi.com/api/v1/test';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'a36ceb4a25mshce5558d48fcde35p112994jsn8d8f2050dfdb',
                    'x-rapidapi-host': 'asos10.p.rapidapi.com'
                }
            };

            try {
                setLoading(true);
                setError(null);
                
                console.log('Fetching from:', url);
                console.log('Options:', options);
                
                const response = await fetch(url, options);
                console.log('Response status:', response.status);
                console.log('Response headers:', response.headers);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
                }
                
                // First try to get the response as text to see what we're dealing with
                const textResult = await response.text();
                console.log('Raw response:', textResult);
                setApiResponse(textResult);
                
                // Try to parse as JSON
                let result;
                try {
                    result = JSON.parse(textResult);
                    console.log('Parsed JSON:', result);
                } catch (parseError) {
                    console.log('Not valid JSON, using as text:', textResult);
                    result = { message: textResult };
                }
                
                // For now, let's create some mock products since we don't know the API response structure
                const mockProducts = [
                    {
                        id: 1,
                        name: "API Test Product 1",
                        price: 29.99,
                        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop"
                    },
                    {
                        id: 2,
                        name: "API Test Product 2",
                        price: 49.99,
                        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=300&h=300&fit=crop"
                    },
                    {
                        id: 3,
                        name: "API Connected Product",
                        price: 79.99,
                        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop"
                    }
                ];
                
                setProducts(mockProducts);
                setLoading(false);
                
            } catch (err) {
                console.error('Detailed API Error:', err);
                console.error('Error name:', err.name);
                console.error('Error message:', err.message);
                console.error('Error stack:', err.stack);
                
                setError({
                    message: err.message,
                    type: err.name,
                    details: err.toString()
                });
                setLoading(false);
                
                // Fallback to mock data
                console.log('Using fallback data due to API error');
                const fallbackProducts = [
                    {
                        id: 1,
                        name: "Fallback Product 1",
                        price: 25.99,
                        image: "/api/placeholder/300/200"
                    },
                    {
                        id: 2,
                        name: "Fallback Product 2",
                        price: 35.99,
                        image: "/api/placeholder/300/200"
                    }
                ];
                setProducts(fallbackProducts);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        alert(`Produit ajouté : ${product.name}`);
        console.log('Product added to cart:', product);
    };

    const handleRetry = () => {
        setLoading(true);
        setError(null);
        setApiResponse(null);
        // Trigger the useEffect again
        window.location.reload();
    };

    if (loading) {
        return (
            <main>
                <div style={{
                    textAlign: 'center',
                    padding: '4rem 2rem',
                    fontSize: '1.2rem',
                    color: '#666'
                }}>
                    <div>Chargement des produits...</div>
                    <div style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                        Connexion à l'API ASOS...
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main>
            <section style={{
                padding: '3rem 2rem',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '3rem',
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#1a1a1a',
                    fontFamily: "'Montserrat', sans-serif",
                    letterSpacing: '1px'
                }}>
                    Notre Collection
                </h2>

                {/* Debug Information */}
                {error && (
                    <div style={{
                        backgroundColor: '#fff3cd',
                        border: '1px solid #ffeaa7',
                        borderRadius: '8px',
                        padding: '1rem',
                        margin: '2rem 0',
                        fontSize: '0.9rem'
                    }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#856404' }}>Debug Info:</h4>
                        <p><strong>Error Type:</strong> {error.type}</p>
                        <p><strong>Error Message:</strong> {error.message}</p>
                        <button 
                            onClick={handleRetry}
                            style={{
                                padding: '0.5rem 1rem',
                                backgroundColor: '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                marginTop: '0.5rem'
                            }}
                        >
                            Réessayer l'API
                        </button>
                    </div>
                )}

                {apiResponse && (
                    <div style={{
                        backgroundColor: '#d1ecf1',
                        border: '1px solid #bee5eb',
                        borderRadius: '8px',
                        padding: '1rem',
                        margin: '2rem 0',
                        fontSize: '0.8rem',
                        wordBreak: 'break-word'
                    }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#0c5460' }}>API Response:</h4>
                        <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
                            {typeof apiResponse === 'string' ? apiResponse : JSON.stringify(apiResponse, null, 2)}
                        </pre>
                    </div>
                )}
                
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
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        justifyItems: 'center'
                    }}>
                        {products.map((product) => (
                            <ProductCard 
                                key={product.id} 
                                product={product} 
                                onAddToCart={handleAddToCart} 
                            />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
};

export default CollectionPage;