import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Navbar from './layouts/Navbar';
import ErrorPage from './pages/error/ErrorPage';

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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;