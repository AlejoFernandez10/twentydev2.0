import React from 'react'
import Plan from './Plan'

const PlanesList = ({data}) => {





    
  return (
    <div className='min-h-[48vh] flex flex-row justify-start items-center z-[100] flex-nowrap overflow-x-auto overflow-y-hidden w-[98%] max-w-[1300px] gap-1 pb-[20px] lg:grid lg:grid-cols-3 lg:place-items-center'>
        {data.map((plan)=>(

          <Plan
          title={plan.title}
          color={plan.color}
          tick={plan.tick}
          noTick={plan.noTick}
          noLoginTick={plan.noLoginTick}
          descrip={plan.descrip}
          priceLineThrough={plan.priceLineThrough}
          discountPrice={plan.discountPrice}
          discountText={plan.discountText}
          delivery={plan.delivery}
          Secciones={plan.Secciones}
          Responsive={plan.Responsive}
          DiseñoModerno={plan.DiseñoModerno}
          DiseñoPersonalizable={plan.DiseñoPersonalizable}
          SeccionCarrito={plan.SeccionCarrito}
          SeccionLogin={plan.SeccionLogin}
          pl={plan.pl}
          actualPrice={plan.actualPrice}
          />

))}
    </div>
  )
}

export default PlanesList