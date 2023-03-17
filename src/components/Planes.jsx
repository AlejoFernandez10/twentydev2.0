import React from 'react'

import ticksilver from '../assets/planes/ticksilver.webp'
import tickgold from '../assets/planes/tickgold.webp'
import tickdiamond from '../assets/planes/tickdiamond.webp'
import xsilver from '../assets/planes/xsilver.webp'
import xgold from '../assets/planes/xgold.webp'


const planesData = [
  
      {
          title:"Bronze",
          color:"#bf8970",
          tick:`${ticksilver}`,
          noTick:`${xsilver}`,
          noLoginTick:`${xsilver}`,
          descrip:"Plan perfecto para mostrar la información de tu proyecto",
          priceLineThrough:"29.999",
          discountPrice: "$19.199",
          discountText:"34% OFF",
          delivery:"7 días para entrega (2 revisiones)",
          Secciones:"1-2 secciones + Header & footer",
          Responsive:"Diseño Responsivo",
          DiseñoModerno:"Diseño Moderno",
          DiseñoPersonalizable:"Diseño 100% personalizable",
          SeccionCarrito:"No incluye carrito",
          SeccionLogin:"No incluye Login",
          pl:"7px"
      },

      {
          title:"Gold",
          color:"#FEED00",
          tick:`${tickgold}`,
          noLoginTick:`${xgold}`,
          descrip:"Plan ideal para emprendimientos o proyectos personales",
          actualPrice:"$39.999",
          delivery:"14 días para entrega (4 revisiones)",
          Secciones:"3-5 secciones + Header & footer",
          Responsive:"Diseño Responsivo",
          DiseñoModerno:"Diseño Moderno",
          DiseñoPersonalizable:"Diseño 100% personalizable",
          SeccionCarrito:"No incluye carrito",
          SeccionLogin:"Incluye Login"
          
      },

      {
          title:"Diamond",
          color:"#5FB5DE",
          tick:`${tickdiamond}`,
          descrip:"Plan perfecto para empresas medianas y pequeñas",
          actualPrice:"$59.999",
          delivery:"21 días para entrega (6 revisiones)",
          Secciones:"4-6 secciones + Header & footer",
          Responsive:"Diseño Responsivo",
          DiseñoModerno:"Diseño Moderno",
          DiseñoPersonalizable:"Diseño 100% personalizable",
          SeccionCarrito:"Incluye carrito",
          SeccionLogin:"Incluye Login"
      }
  
]



const Planes = () => {
  return (
    <>
    <span id="planes"></span>

    <div className=" min-h-[100vh] w-full pb-[30px] grid grid-cols-1 place-items-center bg-[#0B1325]">
    <h3 className="text-[28px] mt-[80px] mb-[50px] md:text-[34px] lg:text-[40px] bg-gradient-to-r from-[#9FF9FF]  to-[#4EA4CD] bg-clip-text text-transparent">Planes Personalizados</h3>
    <p className='text-white w-full text-center mb-[100px]' >Creamos tu sitio web como más te guste!</p>


    <div className='min-h-[48vh] flex flex-row justify-start items-center flex-nowrap overflow-x-auto overflow-y-hidden w-[98%] max-w-[1300px] gap-1 pb-[20px] lg:grid lg:grid-cols-3 lg:place-items-center'>

      {planesData.map((plan)=>(

            <div className="h-[44rem] max-w-[400px] w-[95%] rounded-[10px] flex flex-col flex-grow-0 flex-shrink-0 bg-[#0F182F]" style={{flexBasis:"auto"}}>
            <h5 className=" text-center text-[27px] text-white mt-[20px] md:text-[32px] lg:text-[35px]">Plan <span style={{color:`${plan.color}`}}> {plan.title}</span></h5>
            <p className='text-[#94A3B8] text-[14px] w-[70%]  ml-[15%] mt-[20px]  text-left self-center md:text-[16px] lg:w-[80%] xl:w-[70%]'>{plan.descrip}</p>
            <p className='text-center text-white mb-[40px]  grid grid-rows-2  place-items-center h-[80px]   border-b-2  ml-[5%] mr-[15%]  relative md:text-[]' ><div><span className='precioTachado text-[20px] line-through md:text-[22px]' >{plan.priceLineThrough ? plan.priceLineThrough : plan.priceLineThrough}</span><span className='descuento text-[20px] ml-[10px] md:text-[22px] font-semibold'  style={{color:`${plan.color}`}}>{plan.discountText}</span></div><span className='text-[26px] md:text-[30px] lg:text-[35px] lg:mb-[10px]'>{plan.discountPrice? plan.discountPrice : plan.discountPrice}</span>  <span className='precioActual text-[27px] mb-[50%] mt-[45%] absolute md:text-[30px] lg:text-[35px]'>{plan.actualPrice}</span></p>
            <p className="text-white pl-3 mb-4">* {plan.delivery}</p>

            <div className="spanContainer w-full h-auto flex flex-col justify-between gap-5 pl-3">

              <span className='flex items-center justify-start'><img srcSet={plan.tick} alt="tildeBasico" /><p  className='pl-1 text-[#94A3B8]'>{plan.Secciones}</p></span>
              <span className='flex items-center justify-start'><img srcSet={plan.tick} alt="" /><p className='pl-1 text-[#94A3B8]'>{plan.Responsive}</p></span>
              <span className='flex items-center justify-start'><img srcSet={plan.tick} alt="" /><p className='pl-1 text-[#94A3B8]'>{plan.DiseñoModerno}</p></span>          
              <span className='flex items-center justify-start'><img srcSet={plan.tick} alt="" /><p className='pl-1 text-[#94A3B8]'>{plan.DiseñoPersonalizable}</p></span>
              <span className='flex items-center justify-start'><img srcSet={plan.noTick ? plan.noTick : plan.tick} className="pl-0" style={{paddingLeft:`${plan.pl}`}} alt="" /><p className='pl-2 text-[#94A3B8]'>{plan.SeccionLogin}</p></span>
              <span className='flex items-center justify-start'><img srcSet={plan.noLoginTick ? plan.noLoginTick : plan.tick } className="pl-1" alt=""  style={{paddingLeft:`${plan.pl}`}}/><p className='pl-1 text-[#94A3B8] ' style={{paddingLeft:`${plan.pl}`}}>{plan.SeccionCarrito}</p></span>
            </div>
            <div className="btnContainer w-full flex justify-center mt-[35px] mb-[30px]">
              <a href="#contacto" className="py-[0.6rem] px-6 self-center border rounded-[8px] text-white scale-100 transiotion duration-200 hover:scale-105 hover:text-[#94A3B8]" style={{borderColor:`${plan.color}`}}  >Consultar</a>

            </div>
            </div>

      ))}

    

    </div>

    </div>

    </>
  )
}

export default Planes