import React from "react";
import '../styles/Dashboard.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { BsFillPersonFill } from "react-icons/bs";


export default function Dashboard() {
    
    
    
    return(
        <div className="huge-container">
            
            
            <div className="big-container2">
                <h1>Dashboard</h1>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <BsFillPersonFill/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Categorias</Dropdown.Item>
                        <Dropdown.Item>Registros</Dropdown.Item>
                        <Dropdown.Item>Listado</Dropdown.Item>
                        <Dropdown.Item>Analisis</Dropdown.Item>
                        <Dropdown.Item>Cerrar sesion</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            
            <div className="big-container">
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