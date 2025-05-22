import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Navbar from './layouts/Navbar';
import ErrorPage from './pages/error/ErrorPage';
import Footer from './layouts/Footer';
import CollectionPage from './pages/collectionsPages';
import AboutPage from './pages/aboutPage';

const App = () => {
 
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<CollectionPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;