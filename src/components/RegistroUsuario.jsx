import React from 'react'
import { useNavigate } from 'react-router-dom';
import rickAndMorty from '../assets/preview.jpg'
import { useState } from 'react';
import '../styles/RegistroUsuario.css'

export default function RegistroUsuario() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/');
    }
  
    return (
      <div className="container-register">
                    
        <div className="container-image-register">    
          <img src={rickAndMorty}></img>
        </div>     
                    
      <div className="container-container-register">
        <div className="container-register-register">
          <h1>Register</h1>
          <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleRegister}>Registrarse</button>
        </div>
      </div>    
    </div>
  )
}
