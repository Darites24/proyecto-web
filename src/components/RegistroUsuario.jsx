import React from 'react'
import { useNavigate } from 'react-router-dom';
import rickAndMorty from '../assets/preview.jpg'
import { useState } from 'react';
import '../styles/RegistroUsuario.css'
import axios from 'axios';
import { API_URL } from '../config';

export default function RegistroUsuario() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, {
        nombre,
        correo: email,
        contraseña: password
      });

      alert("Usuario registrado con exito");
      navigate('/');
    } catch (error) {
      console.error("Error al registrar usuario: ", error);
      alert(error.response?.data?.mensaje||"Error al registrar usuario");
    }
  };
  
    return (
      <div className="container-register">
                    
        <div className="container-image-register">    
          <img src={rickAndMorty}></img>
        </div>     
                    
      <div className="container-container-register">
        <div className="container-register-register">
          <h1>Register</h1>
          <input type="text" placeholder = "Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleRegister}>Registrarse</button>
        </div>
      </div>    
    </div>
  )
}
