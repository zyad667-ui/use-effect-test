import React from 'react';

const bannerUrl = 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80';

const aboutStyles = {
    main: {
        fontFamily: 'Montserrat, sans-serif',
        background: '#fafafa',
        minHeight: '70vh',
        paddingBottom: '3rem',
    },
    banner: {
        width: '100%',
        height: '260px',
        objectFit: 'cover',
        borderRadius: '0 0 24px 24px',
        marginBottom: '2rem',
    },
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
        padding: '2.5rem 2rem',
    },
    title: {
        fontSize: '2.2rem',
        fontWeight: 700,
        marginBottom: '1.2rem',
        color: '#1a1a1a',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: '1.3rem',
        fontWeight: 600,
        margin: '2rem 0 1rem 0',
        color: '#333',
    },
    text: {
        fontSize: '1.1rem',
        color: '#444',
        lineHeight: 1.7,
        marginBottom: '1.2rem',
    },
    valuesList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        gap: '2rem',
        justifyContent: 'center',
        marginBottom: '2rem',
    },
    valueItem: {
        background: '#f5a623',
        color: '#fff',
        borderRadius: '8px',
        padding: '0.7rem 1.5rem',
        fontWeight: 600,
        fontSize: '1rem',
        boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
    },
};

const AboutPage = () => (
    <main style={aboutStyles.main}>
        <img src={bannerUrl} alt="Bannière EBrand" style={aboutStyles.banner} />
        <div style={aboutStyles.container}>
            <h1 style={aboutStyles.title}>À propos de EBrand</h1>
            <h2 style={aboutStyles.subtitle}>Notre histoire</h2>
            <p style={aboutStyles.text}>
                Fondée en 2022, EBrand est née d'une passion pour le streetwear et la créativité urbaine. Notre mission : proposer des vêtements authentiques, confortables et stylés, pensés pour celles et ceux qui veulent affirmer leur identité.
            </p>
            <h2 style={aboutStyles.subtitle}>Nos valeurs</h2>
            <ul style={aboutStyles.valuesList}>
                <li style={aboutStyles.valueItem}>Authenticité</li>
                <li style={aboutStyles.valueItem}>Streetwear</li>
                <li style={aboutStyles.valueItem}>Créativité</li>
            </ul>
            <p style={aboutStyles.text}>
                Chaque pièce de notre collection est conçue avec soin, en privilégiant la qualité et l'originalité. Nous croyons en une mode inclusive, inspirée par la rue et portée par la passion.
            </p>
        </div>
    </main>
);

export default AboutPage; 