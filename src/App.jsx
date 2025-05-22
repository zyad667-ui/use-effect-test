import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Navbar from './layouts/Navbar';
import ErrorPage from './pages/error/ErrorPage';

const App = () => {
  const [name, setName] = useState(null);
  const [data, setData] = useState(null);

  const saveChange = () => {
    setData(name);
  };

  const test = () => {
    console.log("Data changed successfully!");
  };

  useEffect(() => {
    test();
  }, [data]);

  useEffect(() => {
    return () => {
      console.log("Cleanup logic or second effect here");
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
