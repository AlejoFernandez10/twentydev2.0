import React from 'react'
import mobile from '../assets/mobile.webp'
import tablet from '../assets/tablet.webp'
import laptop  from '../assets/notebook.webp'
import arrowDown from '../assets/arrowdown.webp'


import '../App.css'


import Nosotros from './Nosotros'
import { Link } from 'react-router-dom'


const Inicio = () => {

  return (
    <>
    <div className='inicio-main-container relative w-full flex justify-center items-center z-10 min-h-[100vh]'>
       
      <div className="inicio-center-container m-auto h-[90vh] max-w-[1180px] flex flex-col items-center justify-center   md:flex-row " >

      
      <div className='inicio-texts-container  mr-0   w-[full] md:w-[50%] flex flex-col justify-start items-center   md:m-auto md:mt-[23vh] lg:mt-[25vh] '>
         
          <h1 className= ' main-title  mt-[30px]  text-4xl leading-none w-[80%] text-center sm:text-[46px] sm:w-[60%] md:w-[100%] md:text-left lg:text-[56px] xl:text-7xl md:pl-5 bg-gradient-to-r from-[#DFFDFF] to-[#4EA4CD] bg-clip-text text-transparent'>Bienvenidos a  Twenty<span className='bg-gradient-to-r from-[#7FD7DF] to-[#4EA4CD] bg-clip-text text-transparent mt-[40px]  '>Dev! </span></h1>
          
          
          <p className='text-[#94A3B8] text-[14px] sm:text-[15px] w-[80%] text-center mt-[20px] sm:mt-[35px] md:text-left md:w-[100%] md:text-[18px] md:pl-6 lg:text-[20px]'>Hacemos de tus sueños una página web.</p>
          <a href="#nosotros" className='ml-6  mt-[55px] mb-[5vh] px-6 py-3 self-start bg-[transparent] border border-[#5FB5DE]  rounded-[5px] text-white hidden md:inline-block  transition duration-200 hover:text-white hover:bg-[#5FB5DE]' >Comenzar!</a>
        
        </div>
        
        <div id='img-container' className=' mr-5 mt-[8vh] mb-[12vh] flex  items-end justify-center  md:m-auto   md:mt-[28vh] relative '>

          <div className='bg-[#5FB5DE] blur-[80px] h-[120px] w-[120px] md:h-[150px] md:w-[150px] md:blur-[100px] lg:h-[200px] lg:w-[200px] lg:blur-[130px] absolute xl:h-[250px] xl:w-[250px] xl:blur-[160px]'></div>
          <img srcSet={mobile} alt="mobileImage"  className='h-[55px] pl-[5px] z-10 sm:h-[75px] sm:pl-[15px] md:pl-[15px] lg:h-[95px]      xl:h-[110px] '/>
          <img srcSet={laptop} alt="laptopImage"  className='h-[100px] z-50 sm:h-[150px] md:h-[150px] md:mr-6  lg:h-[200px]  mb-2  xl:h-[220px] '/>
          <img srcSet={tablet} alt="tabletImage"  className='absolute right-[-20px] h-[75px] z-[60] pl-[5px] sm:h-[100px] sm:right-[-25px] md:pl-[0px]  md:right-0 lg:h-[130px]  xl:right-[-10px] xl:h-[150px] ' />
        </div>
        

        <a href="#nosotros" className='text-[#5FB5DE] pb-10 md:hidden '>Comenzar!</a>

      </div>
      <a href='#nosotros' className=' cursor-pointer flex justify-center items-center absolute bottom-[-120px] md:bottom-[-120px] lg:bottom-[-150px]  animate-bounce ' >
           <img srcSet={arrowDown} alt="" className='mb-[23vh]  ' /> 
        </a>
    </div>

    
    <Nosotros />


    {/*  SECOND CALL TO ACTION */}

    <section className='min-h-[50vh] relative'>

      <h3 className='text-center text-gray-300 text-3xl pt-20  font-semibold px-7 ' >Te interesaría ver nuestro <span className='text-[#5FB5DE]'>trabajo</span> ?</h3>

    <div className='w-full flex flex-col pt-14 justify-between items-center'>
      <p className='  text-center text-sm px-4 text-white'>Dirigíte a Templates para ver nuestros proyectos</p>
      <Link to={"/templates"} className="mt-12  px-4 py-3 border-[1px] border-[#5FB5DE] text-[#5FB5DE] rounded-[5px] transition duration-150 hover:bg-[#5FB5DE] hover:text-white">Ir a Templates</Link>

    </div>
    <div className='bg-[#5FB5DE] z-0  blur-[100px] h-[120px] bottom-0 right-0 w-[120px]   md:h-[150px]  md:w-[150px] md:blur-[120px] lg:h-[200px] lg:w-[200px] lg:blur-[140px] absolute xl:h-[250px] xl:w-[300px] xl:blur-[200px]'></div>
    </section>

    </>
  )
}

export default Inicio