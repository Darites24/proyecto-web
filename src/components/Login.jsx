import React from "react";
import { useState } from 'react';
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
import RegistroUsuario from "./RegistroUsuario";
import '../styles/Login.css'; 
import rickAndMorty from "../assets/preview.jpg";
import axios from "axios";
import { API_URL } from "../config";


export default function Login() { //Snippet rfc 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                correo: email,
                contraseña: password
            });

            const token = response.data.token;
            localStorage.setItem("token", token);
            const usuarioId = response.data.usuario_id;
            localStorage.setItem("usuario_id", usuarioId);

            navigate('/dashboard');
        } catch (error) {
            console.error("Error al iniciar sesión: ", error)
            alert(error.response?.data?.mensaje || "Error al iniciar sesión");
        }
    };

    const handleRegister = () => {
        navigate('/registroUsuario');
    }
    return(
        <div className="container">
                
            <div className="container-image">    
                <img src={rickAndMorty}></img>
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