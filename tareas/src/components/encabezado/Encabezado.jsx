import React from 'react'
import Boton from '../boton/Boton';
import "./encabezado.css"

export default function Encabezado() {
    return (
        <div className='contenedor-cabecera'>
            <span className='titulolista'>Mi lista de tareas</span>
            <Boton />
        </div>
    )
}
