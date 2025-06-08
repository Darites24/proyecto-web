import React from "react";
import "../styles/Analisis.css";
import { BsFillPersonFill } from "react-icons/bs";
import { useState } from 'react';
import { useNavigate} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config";

export default function Analisis() {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const closeDropdown = () => setIsOpen(false);
    const navigate = useNavigate();
    
    const [promedioIngresos, setPromedioIngresos] = useState(0);
    const [promedioEgresos, setPromedioEgresos] = useState(0);
    const [porcentajeAhorro, setPorcentajeAhorro] = useState("0.00");
    const [relacionIE, setRelacionIE] = useState("0.00");
    const [gastoPorCategoria, setGastoPorCategoria] = useState([]);

    useEffect (() => {
        const fetchAnalisis = async () => {
            try {
                const usuarioId = localStorage.getItem("usuario_id");
                const response = await axios.get(`${API_URL}/analisis?usuario_id=${usuarioId}`);
                const data = response.data;

                setPromedioIngresos(data.promedio_ingresos || 0);
                setPromedioEgresos(data.promedio_egresos || 0);
                setPorcentajeAhorro(data.porcentaje_ahorro);
                setRelacionIE(data.relacion_ingresos_egresos);
                setGastoPorCategoria(data.gasto_por_categoria || []);
            } catch (error) {
                console.error("Error al obtener el análisis: ", error);
            }
        };

        fetchAnalisis();
    }, []);

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

            <div className="metricas-grid">
                <div className="card-metrica">
                    <h4>Promedio de Ingresos</h4>
                    <p>${parseFloat(promedioIngresos).toFixed(2)}</p>
                </div>
                <div className="card-metrica">
                    <h4>Promedio de Egresos</h4>
                    <p>${parseFloat(promedioEgresos).toFixed(2)}</p>
                </div>
                <div className="card-metrica">
                    <h4>Porcentaje de Ahorro</h4>
                    <p>{porcentajeAhorro}%</p>
                </div>
                <div className="card-metrica">
                    <h4>Relación Ingresos/Egresos</h4>
                    <p>{relacionIE}</p>
                </div>
            </div>

            <div className="gasto-categorias">
                <h3>Gasto Promedio por Categoría</h3>
                <ul className="lista-categorias">
                    {gastoPorCategoria.length > 0 ? (
                        gastoPorCategoria.map((item) => (
                            <li key={item.categoria}>
                                <span className="categoria-nombre">{item.categoria}</span>
                                <span className="categoria-valor">${parseFloat(item.gasto_promedio).toFixed(2)}</span>
                            </li>
                        ))
                    ) : (
                        <li>No hay datos</li>
                    )}
                </ul>
            </div>
        </div>
    );
}
