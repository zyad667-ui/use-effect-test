import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Navbar from './layouts/Navbar';
import ErrorPage from './pages/error/ErrorPage';
import Footer from './layouts/Footer';
import CollectionPage from './pages/collectionsPages';
import AboutPage from './pages/aboutPage';

const App = () => {
  const [data, setData] = useState(null);

  const test = () => {
    console.log("Data changed successfully!", data);
  };

  useEffect(() => {
    test();
  }, [data]);

  useEffect(() => {
    return () => {
      console.log("App cleanup");
    };
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;