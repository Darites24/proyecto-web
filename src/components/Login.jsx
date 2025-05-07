import React from "react";
import { useState } from 'react';
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
import RegistroUsuario from "./RegistroUsuario";
import '../styles/Login.css'; 
import lonelyImg from "../assets/you-look-lonely.jpg";

export default function Login() { //Snippet rfc 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/dashboard');
    }

    const handleRegister = () => {
        navigate('/registro');
    }
    return(
        <div className="container">  
                <div className="container-image">
                    <img src={lonelyImg}></img>
                </div>  
            <div className="container-container-login">
                <div className="container-login">
                    <h1>Login</h1>
                    <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>Iniciar Sesion</button>
                    <a onClick={handleRegister} href="">Registrarse</a>
                </div>
            </div>    
        </div>
    )
}