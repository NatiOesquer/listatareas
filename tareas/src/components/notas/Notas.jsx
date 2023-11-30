import React from 'react'
import "./notas.css"

export default function Notas() {
  return (
    
      <div className="container-notas">      
        <h2 className="label"> Notas </h2>
        <div>
          <textarea id="texto" name="properties[Texto]"
            className="textarea"
          ></textarea>
        </div>
      </div>
    

  )
}
