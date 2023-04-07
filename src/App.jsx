import { useState } from 'react'
import Navbar from './components/Navbar'
import design from './assets/design.png'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Inicio from './components/Inicio'
import Nosotros from './components/Nosotros'
import TemplateContainer from './components/templates/TemplateContainer'
import PlanesContainer from './components/planes/PlanesContainer'
import Contacto from './components/Contacto'
import TemplateDetailContainer from './components/templates/TemplateDetailContainer'

function App() {
  

  return (
    <BrowserRouter>
    <div className="App  w-full bg-[#0F172A]  min-h-[100vh] ">

     

      <Navbar />     

      <Routes>

        <Route exact path='/' element={<Inicio /> }></Route>

        <Route exact path={'/templates'} element={ <TemplateContainer />}></Route>
        <Route exact path={'/planes'} element={ <PlanesContainer /> } ></Route>
        <Route exact path={`/templates/:id`} element={<TemplateDetailContainer /> } />

        
      </Routes>

      
     
    </div>
    </BrowserRouter>
  )
}

export default App
