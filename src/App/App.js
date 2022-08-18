import React from 'react';

import { Route, Routes, Router } from 'react-router-dom';
import About from '../component/About';
import Navbar from '../component/Navbar';
import SingleCocktail from '../component/SingleCocktail';
import Home from '../component/Home';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cocktail/:id" element={<SingleCocktail />} />
      </Routes>
    </>
  );
}

export default App;
