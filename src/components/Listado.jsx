import React from "react";
import "../styles/Listado.css";
import { BsFillPersonFill } from "react-icons/bs";
import { useState } from 'react';
import { useNavigate} from "react-router-dom";

export default function Listado() {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const closeDropdown = () => setIsOpen(false);
    const navigate = useNavigate();

    const movimientos = [
        { tipo: "Ingreso", categoria: "Salario", valor: 2500, fecha: "2025-05-01" },
        { tipo: "Egreso", categoria: "Comida", valor: 500, fecha: "2025-05-03" },
        { tipo: "Egreso", categoria: "Transporte", valor: 200, fecha: "2025-05-05" },
    ];

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
        <div className="listado-container">
            <div className="navbar-container">
                <h1>Listado de Movimientos</h1>
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
            <h2>Listado de Ingresos y Egresos</h2>
            <table className="tabla-movimientos">
                <thead>
                    <tr>
                        <th>Tipo</th>
                        <th>Categoría</th>
                        <th>Valor</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {movimientos.map((item, index) => (
                        <tr key={index}>
                            <td>{item.tipo}</td>
                            <td>{item.categoria}</td>
                            <td>${item.valor}</td>
                            <td>{item.fecha}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
