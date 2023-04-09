
import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Inicio from './components/Inicio'

import TemplateContainer from './components/templates/TemplateContainer'
import PlanesContainer from './components/planes/PlanesContainer'
import Contacto from './components/Contacto'
import TemplateDetailContainer from './components/templates/TemplateDetailContainer'
import Footer from './components/Footer'
import Faqs from './components/Faqs'
import ScrollToTop from './components/ScrollToTop'


function App() {
  

  return (
    <BrowserRouter>

    <ScrollToTop />
    <div className="App  w-full bg-[#0F172A]  min-h-[100vh] ">

     

      <Navbar />     

      <Routes>

        <Route exact path='/' element={<Inicio /> }></Route>

        <Route exact path={'/templates'} element={ <TemplateContainer />}></Route>
        <Route exact path={'/planes'} element={ <PlanesContainer /> } ></Route>
        <Route exact path={`/templates/:id`} element={<TemplateDetailContainer /> } />
        <Route exact path={'/contacto'} element={ <Contacto /> }  />
        <Route exact path={'/faqs'} element={ <Faqs /> } />

        
      </Routes>

      
     
    </div>

    <Footer />
    </BrowserRouter>
  )
}

export default App
