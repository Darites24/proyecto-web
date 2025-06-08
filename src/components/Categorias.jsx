import React, { useState } from "react";
import '../styles/Categorias.css';
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { CgAdd } from "react-icons/cg";
import { BsFillTrashFill } from "react-icons/bs";
import axios from "axios";
import { useEffect } from "react";
import { API_URL } from "../config";

export default function DashboardCategorias() {

    const [isOpen, setIsOpen] = useState(false);
    const [categorias, setCategorias] = useState([]);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const closeDropdown = () => setIsOpen(false);
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/')
    }
    
    const handleDashboard = () => {
        navigate('/dashboard')
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


    const handleEliminar = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar esta categoría?")) return;

    try {
        await axios.delete(`${API_URL}/categorias/${id}`);

        const nuevasCategorias = categorias.filter(c => c.id !== id);
        setCategorias(nuevasCategorias);

        alert("Categoría eliminada");
    } catch (error) {
        console.error("Error al eliminar categoría:", error);
        alert("Error al eliminar la categoría");
    }
};
        

    const handleCrearCategoria = async () => {
        const nombre = prompt("Escriba el nombre de la nueva categoría: ");
        if (!nombre) return;

        try {
            const usuarioId = localStorage.getItem("usuario_id");
            const response = await axios.post(`${API_URL}/categorias`, {
                nombre,
                usuario_id: usuarioId
            });

            alert("Categoría creada");

            const nuevas = await axios.get(`${API_URL}/categorias?usuario_id=${usuarioId}`);
            setCategorias(nuevas.data);
        } catch (error) {
            console.error("Error al crear categorias: ", error);
            alert(error.response?.data?.mensaje||"Error al crear la categoria");
        }
    };
    
    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const usuarioId = localStorage.getItem("usuario_id");
                const response = await axios.get(`${API_URL}/categorias?usuario_id=${usuarioId}`);
                setCategorias(response.data);
            } catch (error) {
                console.error("Error al cargar las categorias: ", error);
            }
        };

        fetchCategorias();
    }, []);

    return (
        <div className="huge-container">

            <div className="big-container2">
                <h1>Categorías de Gastos</h1>
                <div className="dropdown-container">
                    <button className="dropdonw-toggle" onClick={toggleDropdown}>
                        <BsFillPersonFill />
                    </button>
                    {isOpen && (
                        <ul className="dropdown-menu-custom" onMouseLeave={closeDropdown}>
                            <li onClick={handleDashboard}>Dashboard</li>
                            <li onClick={closeDropdown}>Categorías</li>
                            <li onClick={handleReg}>Registros</li>
                            <li onClick={handleList}>Listado</li>
                            <li onClick={handleAnal}>Análisis</li>
                            <li onClick={handleClose}>Cerrar Sesión</li>
                        </ul>
                    )}
                </div>
            </div>

            <div className="categoria-container">
                

                <table className="tabla-categorias">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorias.map(categoria => (
                            <tr key={categoria.id}>
                                <td>{categoria.id}</td>
                                <td>{categoria.nombre}</td>
                                <td>
                                    <button className="btn-eliminar" onClick={() => handleEliminar(categoria.id)}>
                                        <BsFillTrashFill/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {categorias.length === 0 && (
                            <tr>
                                <td colSpan="3">No hay categorías registradas.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="container-button-add">
                    <button className="button-add" onClick={handleCrearCategoria}>
                        <CgAdd className="button-icon" /> Crear Categoría
                    </button>
                </div>
            </div>
        </div>
    );
}
