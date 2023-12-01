import React from 'react'
import "../App.css"
import Titulo from '../components/titulo/Titulo'
import Logo from '../components/logo/Logo'
import Materiales from '../components/materiales/Materiales'
import Footer from '../components/footer/Footer'
import Notas from '../components/notas/Notas'

import TaskItem from '../components/taskItem/TaskItem'


export default function Home() {
  return (
    <div>
      <Titulo />  
      <Logo />    
      <Materiales />   
     
      <TaskItem/>
      <Notas />
      <Footer />
    </div>
  )
}
