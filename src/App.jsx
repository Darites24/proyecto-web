import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import './App.css'
import Dashboard from './components/Dashboard';
import RegistroUsuario from './components/RegistroUsuario';
import Categorias from './components/Categorias';
import Registro from './components/Registro';
import Listado from './components/Listado';
import Analisis from './components/Analisis';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/registroUsuario' element={<RegistroUsuario/>}/>
        <Route path='/categorias' element={<Categorias/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/listado' element={<Listado/>}/>
        <Route path='/analisis' element={<Analisis/>}/>
      </Routes>
    </Router>
  );
}

export default App
