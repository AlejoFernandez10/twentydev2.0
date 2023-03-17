import { useState } from 'react'
import Navbar from './components/Navbar'
import design from './assets/design.png'


import './App.css'
import Inicio from './components/Inicio'
import Nosotros from './components/Nosotros'
import Templates from './components/Templates'
import Planes from './components/Planes'
import Contacto from './components/Contacto'

function App() {
  

  return (
    <>
    <div className="App min-h-[100vh] w-full bg-[#0F172A] relative ">

      <img srcSet={design}  alt="" className='absolute h-[200px] right-6 top-[-50px] sm:h-[240px] sm:right-12 md:h-[250px] lg:h-[300px] lg:right-16'/>
      <img srcSet={design}  alt="" className='absolute h-[130px] right-0 sm:h-[170px] md:h-[190px] lg:h-[230px]'/>

      <Navbar />

      <Inicio />

      <Nosotros />

      <Templates />

      <Planes />

      <Contacto />
     
    </div>
    </>
  )
}

export default App
