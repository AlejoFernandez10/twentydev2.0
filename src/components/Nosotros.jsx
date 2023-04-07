import React from 'react'

import nosotrosColab from '../assets/nosotros/nosotrosColab.webp';
import nosotrosPagWeb from '../assets/nosotros/nosotrosPagWeb.webp';
import nosotrosTemplates from '../assets/nosotros/nosotrosTemplates.webp';


const Nosotros = () => {
  return (
    <>
    
     <div className='mt-[100px] h-[50px]' id="nosotros"></div>
<div className=" w-full min-h-[100vh] flex flex-col relative justify-center bg-[#0B1325]">


  
  <h2 className=" text-center  text-[30px] sm:text-[35px] lg:text-[43px] mb-[60px] mt-10 bg-gradient-to-r from-[#4EA4CD]  to-[#9FF9FF] bg-clip-text text-transparent" >Nuestros servicios</h2>

  <div className="max-w-[1200px] w-full m-auto flex flex-col justify-center items-center ">

    <div className="w-[95%] flex  flex-col justify-center items-center md:flex-row " >
      <div className="m-auto h-[20vh] md:h-[30vh]    w-50% text-[#94A3B8] flex flex-col justify-evenly items-center">
        <h3 className=' text-center text-[30px] lg:text-[35px] text-gray-300 mb-[20px] justify-self-start '>Templates</h3>
        <p className='ml-[7%] text-[13px] text-left  w-[80%] sm:text-[15px] md:text-[17px] xl:text-[19px]'>Páginas Web predesarrolladas por nosotros que se adaptan a tu negocio. Se pueden modificar la paleta de colores, los contenidos y las imágenes dependiendo de tus necesidades.</p>
      </div>
      
      <img srcSet={nosotrosTemplates} className="mt-5 w-[50%] "  alt="templates imagen" />
    </div>


    <div className='w-[95%] flex flex-col justify-center items-center md:flex-row-reverse relative'  style={{marginTop:"40px"}}>
      <div className='m-auto h-[20vh] md:h-[30vh]    w-50% text-[#94A3B8] flex flex-col justify-evenly items-center'>
        <h3 className=' text-center text-[30px] lg:text-[35px] text-gray-300 mb-[20px] justify-self-start '>Páginas <span style={{color:"rgb(95 181 222)"}}>Web</span> </h3>
        <p className='ml-[7%] text-[13px] self-center text-left  w-[80%] sm:text-[15px] md:text-[17px] xl:text-[19px]'>Si no contamos con un template para con tu negocio, también desarrollamos sitios web desde 0 y como vos lo necesites.</p>
      </div>
      <div className='bg-[#5FB5DE] z-0  blur-[80px] h-[120px] bottom-5 w-[120px] md:left-0 md:bottom-16 md:h-[150px]  md:w-[150px] md:blur-[100px] lg:h-[200px] lg:w-[200px] lg:blur-[100px] absolute xl:h-[250px] xl:w-[300px] xl:blur-[200px]'></div>
      <img srcSet={nosotrosPagWeb} className="mt-5 w-[50%] max-h-[420px] z-50"  alt="colaboraciones imagen" />
    </div>

    
    <div className='w-[95%] flex flex-col justify-center items-center md:flex-row '  style={{marginTop:"40px"}}>
      <div className='m-auto h-[20vh] md:h-[30vh]    w-50% text-[#94A3B8] flex flex-col justify-evenly items-center'>
        <h3 className=' text-center text-[30px] lg:text-[35px] text-gray-300 mb-[20px] justify-self-start '>Colaboraciones</h3>
        <p className='ml-[7%] text-[13px] self-center text-left  w-[80%] sm:text-[15px] md:text-[17px] xl:text-[19px]'>Si te interesa nuestro trabajo y necesitas ayuda con tu proyecto, estamos más que dispuestos a colaborar con vos.</p>
      </div>
      <img srcSet={nosotrosColab} className="mt-5 w-[70%] sm:w-[50%] "  alt="colaboraciones imagen" />
    </div>


    <a href="#contacto" className='mt-10 mb-20 px-4 py-[0.8rem] rounded-[7px] text-[#5FB5DE] border border-[#5FB5DE] transition duration-200 hover:text-white hover:bg-[#5FB5DE]' >Contactanos!</a>
  </div>
</div> 
    </>
  )
}

export default Nosotros
