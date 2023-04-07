import React from 'react'

import ticksilver from '../../assets/planes/ticksilver.webp'
import tickgold from '../../assets/planes/tickgold.webp'
import tickdiamond from '../../assets/planes/tickdiamond.webp'
import xsilver from '../../assets/planes/xsilver.webp'
import xgold from '../../assets/planes/xgold.webp'
import PlanesList from './PlanesList'


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
          SeccionLogin:"Incluye Login",
          
      }
  
]



const PlanesContainer = () => {
  return (
    <>
    <span id="planes"></span>

    <div className=" min-h-[100vh] w-full pb-[30px] pt-10 grid grid-cols-1 place-items-center bg-[#0B1325] ">
    <h3 className="text-[28px] mt-[80px] mb-[50px] md:text-[34px] lg:text-[40px] bg-gradient-to-r from-[#9FF9FF]  to-[#4EA4CD] bg-clip-text text-transparent">Planes Personalizados</h3>
    <p className='text-white w-full text-center mb-[50px] ' >Creamos tu sitio web como más te guste!</p>


    <div className='bg-[#5FB5DE] z-0  blur-[80px] h-[120px] bottom-[1%] left-[40%] w-[120px]  md:h-[150px]  md:w-[150px] md:blur-[100px] lg:h-[200px] lg:w-[200px] lg:blur-[100px] absolute xl:h-[270px] xl:w-[300px] xl:blur-[220px]'></div>

      <PlanesList data={planesData} />

    

    

    </div>

    </>
  )
}

export default PlanesContainer