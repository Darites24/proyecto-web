import React, { useState } from "react";
import '../styles/Categorias.css';
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { CgAdd } from "react-icons/cg";
import { BsFillTrashFill } from "react-icons/bs";

export default function DashboardCategorias() {

    const [isOpen, setIsOpen] = useState(false);
    const [categorias, setCategorias] = useState([
        { id: 1, nombre: "Alimentación" },
        { id: 2, nombre: "Transporte" },
        { id: 3, nombre: "Educación" },
        { id: 4, nombre: "Salud" }
    ]);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const closeDropdown = () => setIsOpen(false);
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/');
    };

    const handleDashboard = () => {
        navigate('/dashboard');
    };

    const handleReg = () => {
        navigate('/registro')
    }

    const handleEliminar = (id) => {
        const nuevasCategorias = categorias.filter(categoria => categoria.id !== id);
        setCategorias(nuevasCategorias);
    };

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
                            <li onClick={closeDropdown}>Listado</li>
                            <li onClick={closeDropdown}>Análisis</li>
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
                    <button className="button-add">
                        <CgAdd className="button-icon" /> Crear Categoría
                    </button>
                </div>
            </div>
        </div>
    );
}
