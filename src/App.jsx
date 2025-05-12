import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import './App.css'
import Dashboard from './components/Dashboard';
import RegistroUsuario from './components/RegistroUsuario';
import Categorias from './components/Categorias';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/registro' element={<RegistroUsuario/>}/>
        <Route path='/categorias' element={<Categorias/>}/>
      </Routes>
    </Router>
  );
}

export default App
