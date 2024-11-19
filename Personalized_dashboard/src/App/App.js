import React, { Component, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './HomePage';
import Article from './ArticlePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:id" element={<Article />} />
    </Routes>
  );
};

export default App;