import React from "react";
import '../styles/Dashboard.css';
import { BsFillPersonFill } from "react-icons/bs";
import { useState } from 'react';
import { useNavigate} from "react-router-dom";
import { CgAdd } from "react-icons/cg";

export default function Dashboard() {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const closeDropdown = () => setIsOpen(false);
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/')
    }
    
    const handleCat = () => {
        navigate('/categorias')
    }
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
                            <li onClick={closeDropdown}>Registros</li>
                            <li onClick={closeDropdown}>Listado</li>
                            <li onClick={closeDropdown}>Análisis</li>
                            <li onClick={handleClose}>Cerrar Sesión</li>
                        </ul>
                    )}
                </div>
            </div>
            
            <div className="dashboard-container">
                <div className="container-saldos">
                    <h3>Saldo Disponible</h3>
                    <p>$1200</p>
                </div>
                <div className="container-ingresos">
                    <h3>Ingresos Totales</h3>
                    <p>$3500</p>
                </div>
                <div className="container-egresos">
                    <h3>Egresos Totales</h3>
                    <p>$2000</p>
                </div>
                
            </div>
        </div>
    )
}