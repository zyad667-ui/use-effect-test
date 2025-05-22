import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Navbar from './layouts/navbar';
import ErrorPage from './pages/error/ErrorPage';

const App = () => {
  const [name, setName] = useState(null);
  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(0); // Nouveau compteur

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


      {/* Compteur */}
      <div style={{ padding: '1rem' }}>
        <h2>Counter</h2>
        <p>Current count: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    </>
  );
};

export default App;
