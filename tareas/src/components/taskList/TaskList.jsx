import React from 'react';

import "./tasklist.css";
import TaskItem from '../taskItem/TaskItem';

export default function TaskList({ tareas }) {
    return (
        <div className='contenedor-tasklist'>
           
            <div>
                {/* Map through the tasks and render each TaskItem */}
                {tareas.map((tarea, index) => (
                    <TaskItem key={index} tarea={tarea} />
                ))}
            </div>
        </div>
    );
}
