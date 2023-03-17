import React from 'react'
import mobile from '../assets/mobile.webp'
import tablet from '../assets/tablet.webp'
import laptop  from '../assets/notebook.webp'
import arrowDown from '../assets/arrowdown.webp'


import '../App.css'





const Inicio = () => {

  return (
    <div className='inicio-main-container relative w-full flex justify-center items-center'>
      <div className="inicio-center-container m-auto h-[90vh] max-w-[1180px] flex flex-col items-center justify-center   md:flex-row " >

      
      <div className='inicio-texts-container  mr-0   w-full flex flex-col justify-start items-center   md:m-auto md:mt-[23vh] lg:mt-[25vh] '>
         
          <h1 className= ' main-title  mt-[30px]  text-4xl leading-none w-[80%] text-center sm:text-[46px] sm:w-[60%] md:w-[100%] md:text-left lg:text-[56px] xl:text-7xl md:pl-5 bg-gradient-to-r from-[#DFFDFF] to-[#4EA4CD] bg-clip-text text-transparent'>Bienvenidos a  Twenty<span className='bg-gradient-to-r from-[#7FD7DF] to-[#4EA4CD] bg-clip-text text-transparent mt-[40px]  '>Dev! </span></h1>
          
          
          <p className='text-[#94A3B8] text-[14px] sm:text-[15px] w-[80%] text-center mt-[20px] sm:mt-[35px] md:text-left md:w-[100%] md:text-[18px] md:pl-6 lg:text-[20px]'>Hacemos de tus sueños una página web.</p>
          <a href="#" className='ml-6  mt-[55px] mb-[5vh] px-6 py-3 self-start bg-[transparent] border border-[#5FB5DE]  rounded-[5px] text-white hidden md:inline-block  transition duration-200 hover:text-white hover:bg-[#5FB5DE]' >Comenzar!</a>
        
        </div>

        <div className=' mr-0 mt-[8vh] mb-[12vh] flex w-full items-end justify-center  md:m-auto md:mb-[]  md:mt-[28vh] relative'>
          <img srcSet={mobile} alt=""  className='h-[55px] pl-[5px] sm:h-[75px] sm:pl-[15px] md:pl-[15px] lg:h-[95px]  lg:absolute lg:left-[40px]   xl:h-[110px] '/>
          <img srcSet={laptop} alt=""  className='h-[100px] sm:h-[150px] md:h-[150px] lg:h-[200px]  mb-2  xl:h-[220px] '/>
          <img srcSet={tablet} alt=""  className='h-[75px] pl-[5px] sm:h-[100px] sm:pl-[15px] md:pl-[5px] lg:h-[130px] lg:absolute lg:right-[65px] xl:right-[75px] xl:h-[150px] ' />
        </div>
        

        

      </div>
      <a href='#nosotros' className=' cursor-pointer flex justify-center items-center absolute bottom-[-120px] md:bottom-[-120px] lg:bottom-[-150px]  animate-bounce ' >
           <img srcSet={arrowDown} alt="" className='mb-[23vh]   ' /> 
        </a>
    </div>
  )
}

export default Inicio