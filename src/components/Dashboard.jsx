import React from "react";
import '../styles/Dashboard.css';
import { BsFillPersonFill } from "react-icons/bs";
import { useState } from 'react';
import { useNavigate} from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { API_URL } from "../config";

export default function Dashboard() {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const closeDropdown = () => setIsOpen(false);
    const navigate = useNavigate();
    const [ingresos, setIngresos] = useState(0);
    const [egresos, setEgresos] = useState(0);
    const saldo = ingresos - egresos;

    const handleClose = () => {
        navigate('/')
    }
    
    const handleCat = () => {
        navigate('/categorias')
    }

    const handleReg = () => {
        navigate('/registro')
    }

    const handleList = () => {
        navigate('/listado')
    }

    const handleAnal = () => {
        navigate('/analisis')
    }

    useEffect(() => {
        const fetchMovimientos = async () => {
            try {
                const usuarioId = localStorage.getItem("usuario_id");
                const response = await axios.get(`{API_URL}/movimientos?usuario_id={usuarioId}`);
                const movimientos = response.data;

                const totalIngresos = movimientos.filter(m => m.tipo.toLowerCase() === 'ingreso')
                .reduce((acc, curr) => acc + parseFloat(curr.valor), 0);

                const totalEgresos = movimientos.filter(m => m.tipo.toLowerCase() === 'egreso')
                .reduce((acc, curr) => acc + parseFloat(curr.valor), 0);

                setIngresos(totalIngresos);
                setEgresos(totalEgresos);
            } catch (error) {
                console.error("Error al cargar movimientos: ", error);
            }
        };

        fetchMovimientos();
    }, []);

    return(
        <div className="huge-container">
            
            <div className="big-container2">
                <h1>Dashboard</h1>
                <div className="dropdown-container">
                    <button className="dropdonw-toggle" onClick={toggleDropdown}>
                        <BsFillPersonFill/>
                    </button>
                    {isOpen && (
                        <ul className="dropdown-menu-custom" onMouseLeave={closeDropdown}>
                            <li onClick={closeDropdown}>Dashboard</li>
                            <li onClick={handleCat}>Categorías</li>
                            <li onClick={handleReg}>Registros</li>
                            <li onClick={handleList}>Listado</li>
                            <li onClick={handleAnal}>Análisis</li>
                            <li onClick={handleClose}>Cerrar Sesión</li>
                        </ul>
                    )}
                </div>
            </div>
            
            <div className="dashboard-container">
                <div className="container-saldos">
                    <h3>Saldo Disponible</h3>
                    <p>${saldo}</p>
                </div>
                <div className="container-ingresos">
                    <h3>Ingresos Totales</h3>
                    <p>${ingresos}</p>
                </div>
                <div className="container-egresos">
                    <h3>Egresos Totales</h3>
                    <p>${egresos}</p>
                </div>
                
            </div>
        </div>
    )
}