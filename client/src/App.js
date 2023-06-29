import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import './App.css';
import OneProduct from './components/OneProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route element={<Main />} path="/" default/>
        <Route element={<OneProduct />} path="/products/:id" />
        <Route element={<UpdateProduct />} path="products/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
