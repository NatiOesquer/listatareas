import React from 'react'
import "./notas.css"

export default function Notas() {
  return (
    <div className="container">
    <label htmlFor="texto" className="label">
      Notas
    </label>
    <div>
      <textarea
        id="texto"
        name="properties[Texto]"
        rows="30"
        cols="40"
        className="textarea"
      ></textarea>
    </div>
  </div>
  )
}
