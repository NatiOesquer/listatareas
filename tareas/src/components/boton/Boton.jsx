import React, { useEffect, useState } from 'react';
import "./boton.css"
import Formulario from '../formulario/Formulario';

export default function Boton() {

const [mostrarFormulario, setMostrarFormulario] = useState(false)


  return (
    <div className='contenedor-boton'>
        <button className='boton' onClick={() =>{
            setMostrarFormulario(!mostrarFormulario)
        }}>Agregar Tarea</button>

        {
            mostrarFormulario && <Formulario />
        }
    </div>
  )
}
