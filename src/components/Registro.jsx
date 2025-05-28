import React, { useState } from "react";
import "../styles/Registro.css";

export default function Registro() {
    
    const [tipo, setTipo] = useState("Ingreso");
    const [categoria, setCategoria] = useState("");
    const [valor, setValor] = useState("");
    const [mensaje, setMensaje] = useState("");

    // Esto debe venir de la base de datos en una implementación real
    const categoriasDisponibles = [
        "Salario",
        "Comida",
        "Transporte",
        "Educación",
        "Entretenimiento"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!valor || !categoria) {
            setMensaje("Por favor completa todos los campos.");
            return;
        }

        // Aquí iría la lógica para enviar al backend
        console.log({
            tipo,
            categoria,
            valor,
            fecha: new Date().toISOString()
        });

        setMensaje("Movimiento registrado exitosamente.");
        setValor("");
        setCategoria("");
        setTipo("Ingreso");
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
                        {categoriasDisponibles.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
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
