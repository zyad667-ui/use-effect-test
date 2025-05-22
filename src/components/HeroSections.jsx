import React from "react";
import "../styles/HeroSection.css";

const HeroSections = () => (
    <section className="hero"> 
        <img src="/api/placeholder/800/400" alt="Hero Image" className="heroImage" />
        <div className="heroText">
            <h1>EBrand - Nouvelle Collection S/S 2024</h1>
            <p>Découvrez les tendances de la saison</p>
        </div>
    </section>
);

export default HeroSections;