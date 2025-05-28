import React from "react";
import "../styles/Analisis.css";
import { BsFillPersonFill } from "react-icons/bs";
import { useState } from 'react';
import { useNavigate} from "react-router-dom";

export default function Analisis() {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const closeDropdown = () => setIsOpen(false);
    const navigate = useNavigate();
    
    const totalIngresos = 3500;
    const totalEgresos = 2000;
    const ahorro = totalIngresos - totalEgresos;
    const porcentajeAhorro = ((ahorro / totalIngresos) * 100).toFixed(2);

    const promedioIngresos = 1750;
    const promedioEgresos = 1000;

    const gastoPorCategoria = {
        "Comida": 600,
        "Transporte": 300,
        "Entretenimiento": 200
    };

    const handleClose = () => {
        navigate('/')
    }
    
    const handleCat = () => {
        navigate('/categorias')
    }

    const handleReg = () => {
        navigate('/registro')
    }

    const handleAnal = () => {
        navigate('/analisis')
    }

    const handleDash = () => {
        navigate('/dashboard')
    }

    const handleList = () => {
        navigate('/listado')
    }

    return (
        <div className="analisis-container">
            <div className="navbar-container">
                <h1>Analisis</h1>
                <div className="dropdown-container">
                    <button className="dropdown-toggle" onClick={toggleDropdown}>
                        <BsFillPersonFill />
                    </button>
                    {isOpen && (
                        <ul className="dropdown-menu-custom" onMouseLeave={closeDropdown}>
                            <li onClick={handleDash}>Dashboard</li>
                            <li onClick={handleCat}>Categorías</li>
                            <li onClick={handleReg}>Registros</li>
                            <li onClick={handleList}>Listado</li>
                            <li onClick={handleAnal}>Análisis</li>
                            <li onClick={handleClose}>Cerrar Sesión</li>
                        </ul>
                    )}
                </div>
            </div>
            <h2>Análisis Financiero</h2>

            <div className="analisis-metricas">
                <p>Promedio de Ingresos: ${promedioIngresos}</p>
                <p>Promedio de Egresos: ${promedioEgresos}</p>
                <p>Porcentaje de Ahorro: {porcentajeAhorro}%</p>
                <p>Relación Ingresos/Egresos: {(totalIngresos / totalEgresos).toFixed(2)}</p>
            </div>

            <div className="gasto-categorias">
                <h3>Gasto Promedio por Categoría</h3>
                <ul>
                    {Object.entries(gastoPorCategoria).map(([categoria, valor]) => (
                        <li key={categoria}>
                            {categoria}: ${valor}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
