import React from 'react'
import "./materiales.css"

export default function Materiales() {
    return (
        <div className='div-contenedor'>

            <div className='contenedor-principal'>
                <h2 className='titulo-mate'> Materiales para realizar las tareas</h2>
                <div className='contenedor-materiales'>
                    <textarea name='materiales1' className='materiales1'> </textarea>
                    <textarea name="materiales2" rows="45" cols="45" className='materiales2'></textarea>
                    <textarea name='materiales1' className='materiales1'> </textarea>
                </div>
               
            </div>
         
        </div>


    )
}
