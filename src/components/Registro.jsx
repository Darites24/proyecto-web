import React, { useState } from "react";
import "../styles/Registro.css";
import axios from "axios";
import { useEffect } from "react";
import { API_URL } from "../config";
import { useNavigate } from "react-router-dom";

export default function Registro() {
    
const navigate = useNavigate();

    const [tipo, setTipo] = useState("Ingreso");
    const [categoria, setCategoria] = useState("");
    const [valor, setValor] = useState("");
    const [mensaje, setMensaje] = useState("");

    
    const [categoriasDisponibles, setCategoriasDisponibles] = useState([]);

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const usuarioId = localStorage.getItem("usuario_id");
                const response = await axios.get(`${API_URL}/categorias?usuario_id=${usuarioId}`);
                setCategoriasDisponibles(response.data);
            } catch (error) {
                console.error("Error al cargar las categorías: ", error);
            }
        };

        fetchCategorias();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!valor || !categoria) {
            setMensaje("Por favor completa todos los campos.");
            return
        }
        
        const usuarioId = localStorage.getItem("usuario_id");
        const categoriaSeleccionada = categoriasDisponibles.find(c => c.nombre === categoria);

        if (!categoriaSeleccionada) {
            setMensaje("La categoría seleccionada no es válida.");
            return;
        }

        try {
            await axios.post(`${API_URL}/movimientos`, {
                tipo,
                valor: parseFloat(valor),
                categoria_id: categoriaSeleccionada.id,
                usuario_id: usuarioId
            });

            navigate('/dashboard');

            setMensaje("Movimiento registrado exitosamente");
            setValor("");
            setCategoria("");
            setTipo("Ingreso");
        } catch (error) {
            console.error("Error al registrar movimiento: ", error);
            setMensaje(error.response?.data?.mensaje || "Error al registrar el movimiento");
        }
    };

    return (
        <div className="registro-container">
            <h2>Registrar Ingreso o Egreso</h2>
            <form onSubmit={handleSubmit} className="registro-form">
                <label>
                    Tipo de Movimiento:
                    <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                        <option value="Ingreso">Ingreso</option>
                        <option value="Egreso">Egreso</option>
                    </select>
                </label>

                <label>
                    Categoría:
                    <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                        <option value="">Selecciona una categoría</option>
                        {categoriasDisponibles.map((cat) => (
                            <option key={cat.id} value={cat.nombre}>{cat.nombre}</option>
                        ))}
                    </select>
                </label>

                <label>
                    Valor ($):
                    <input
                        type="number"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                        placeholder="Ingrese el monto"
                    />
                </label>

                <button type="submit">Registrar</button>
                {mensaje && <p className="mensaje">{mensaje}</p>}
            </form>
        </div>
    );
}
