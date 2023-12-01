import React, { useState, useEffect } from 'react';
import Formulario from '../formulario/Formulario';
import TaskList from '../taskList/TaskList';


export default function TaskItem() {
    const [tareas, setTareas] = useState([]);

    const handleAgregarNuevaTarea = (nuevaTarea) => {
        setTareas((tareas) => [...tareas, nuevaTarea]);
    };

    useEffect(()=>{
        console.log("la tarea esta vacia")
    })

    useEffect(() => {
        console.log("La lista de tareas se ha actualizado:", tareas);
    }, [tareas]);

    return (
        <div>
            
            <Formulario agregarNuevaTarea={handleAgregarNuevaTarea} />
            <TaskList tareas={tareas} />

        </div>
    );
}
