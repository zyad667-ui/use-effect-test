import React from "react";
import "../styles/HeroSection.css";

const HeroSections = () => (
    <section className="hero"> 
        <img src="https://static.pullandbear.net/2/static2/itxwebstandard/responsive/genderselector/man_m.jpg?ts=20250521020704" alt="Hero Image" className="heroImage" />
        <div className="heroText">
            <h1>EBrand - Nouvelle Collection S/S 2024</h1>
            <p>Découvrez les tendances de la saison</p>
        </div>
    </section>
);

export default HeroSections;