import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import './App.css'
import Dashboard from './components/Dashboard';
import RegistroUsuario from './components/RegistroUsuario';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/registro' element={<RegistroUsuario/>}/>
      </Routes>
    </Router>
  );
}

export default App
