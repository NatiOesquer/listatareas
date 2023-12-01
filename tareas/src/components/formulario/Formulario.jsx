import React, { useState } from 'react'
import "./formulario.css"

export default function Formulario({ agregarNuevaTarea }) {

  const [nuevaTarea, setNuevaTarea] = useState({
    tarea: "",

  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevaTarea((datosDeTarea) => ({
      ...datosDeTarea,
      [name]: value,
    }));
  };

  const handleAgregarTarea = (event) => {
    // Se utiliza para que no se recargue la pagina
    event.preventDefault();
   
    if (nuevaTarea.tarea.trim() !== "") {
      agregarNuevaTarea({ ...nuevaTarea, completada: false });
      setNuevaTarea({
        tarea: "",
      });
      alert("Tarea agregada con éxito!");
    } else {
      alert("Faltan completar campos");
    }
  
    
  };


  return (
    <div className='contenedor-formulario'>
      <form onSubmit={handleAgregarTarea} className='form-tarea'>
        <div className='div-form'>
          <label className='titulo-label'>
            Tarea:
            <input type="text"
              className='input-form'
              name="tarea"
              placeholder='Ingresar tarea'
              value={nuevaTarea.tarea}
              onChange={handleInputChange}

            />
          </label>
          <button type='submit' className='btn-tarea'>Agregar</button>
        </div>
       
      </form>
    </div>
  )
}
