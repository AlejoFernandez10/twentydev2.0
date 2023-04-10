import React from 'react'

import { Link } from 'react-router-dom'

const Plan = ({title, color, tick, noTick, descrip, priceLineThrough, noLoginTick,discountPrice, discountText, delivery, Secciones, Responsive, DiseñoModerno, DiseñoPersonalizable, SeccionCarrito, SeccionLogin, pl, actualPrice }) => {



  return (
    <div>

<div className="h-[44rem] max-w-[400px] min-w-[300px] rounded-[10px] ml-2 flex flex-col flex-grow-0 flex-shrink-0 bg-[#12192D] shadow-2xl" style={{flexBasis:"auto"}}>
<h5 className=" text-center text-[27px] text-white mt-[20px] md:text-[32px] lg:text-[35px]">Plan <span style={{color:`${color}`}}> {title}</span></h5>
<p className='text-[#94A3B8] text-[13px] w-[70%]   mt-[20px]  text-center self-center md:text-[16px] lg:w-[80%] xl:w-[80%]'>{descrip}</p>
<p className='text-center text-white mb-[40px]  grid grid-rows-2  place-items-center h-[80px]   border-b-2  mr-[5%] ml-[5%]  relative ' ><div><span className='precioTachado text-[20px] line-through md:text-[22px]' >{priceLineThrough ? priceLineThrough : priceLineThrough}</span><span className='descuento text-[20px]  md:text-[22px] font-semibold'  style={{color:`${color}`}}>{discountText}</span></div><span className='text-[26px] md:text-[30px] lg:text-[35px] lg:mb-[10px]'>{discountPrice ? discountPrice : discountPrice}</span>  <span className='precioActual text-[27px] mb-[50%] mt-[45%] absolute md:text-[30px] lg:text-[35px]'>{actualPrice}</span></p>
<p className="text-white pl-3 mb-4 text-md">* {delivery}</p>

<div className="spanContainer w-full h-auto flex flex-col justify-between gap-5 pl-3">

  <span className='flex items-center justify-start'><img srcSet={tick} alt="tildeBasico" /><p  className='pl-1 text-[#94A3B8] text-sm'>{Secciones}</p></span>
  <span className='flex items-center justify-start'><img srcSet={tick} alt="" /><p className='pl-1 text-[#94A3B8] text-sm'>{Responsive}</p></span>
  <span className='flex items-center justify-start'><img srcSet={tick} alt="" /><p className='pl-1 text-[#94A3B8] text-sm'>{DiseñoModerno}</p></span>          
  <span className='flex items-center justify-start'><img srcSet={tick} alt="" /><p className='pl-1 text-[#94A3B8] text-sm'>{DiseñoPersonalizable}</p></span>
  <span className='flex items-center justify-start'><img srcSet={noTick ? noTick : tick} className="pl-[2px] "  alt="" /><p className='pl-2 text-[#94A3B8] text-sm'>{SeccionLogin}</p></span>
  <span className='flex items-center justify-start'><img srcSet={noLoginTick ? noLoginTick : tick } className="pl-1" alt=""  /><p className='pl-1 text-[#94A3B8] text-sm ml-1 ' >{SeccionCarrito}</p></span>
</div>
<div className="btnContainer w-full flex justify-center mt-[35px] mb-[30px]">
  <Link to={'/contacto'} className="py-[0.6rem] px-6 self-center border rounded-[8px] text-white scale-100 transiotion duration-200 hover:scale-105 hover:text-[#94A3B8]" style={{borderColor:`${color}`}}  >Consultar</Link>

</div>
</div>

    </div>
  )
}

export default Plan