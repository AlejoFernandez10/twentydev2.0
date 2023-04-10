import React from 'react'


import seoImg from '../assets/seo.png'
import seguridadImg from '../assets/seguridad.png'
import codigoImg from '../assets/codigo.png'


const PorqueElegirnos = () => {

    const cardContent = [
        {
            imagen:codigoImg,
            titulo:"Eficiencia",
            texto:"Aseguramos gran rendimiento y escalabilidad en tu sitio web con el uso de las últimas tecnologías. " 
        },

        {
            imagen:seoImg,
            titulo:"SEO",
            texto:"Optimizamos el SEO de tu sitio para que aparezca en los primeros resultados de las búsquedas." 
        },
            
        {
            imagen:seguridadImg,
            titulo:"Seguridad",
            texto:"Nos aseguramos de que los datos que se manejen en tu página estén seguros y fuera del alcance. "            
        }
    ]



  return (
    <div className='min-h-[80vh] w-full flex flex-col  items-center pb-[100px]'>

        <h3 className=' pt-[100px]  pb-[100px] text-[30px] sm:text-[35px] lg:text-[43px] bg-gradient-to-r from-[#9FF9FF]  to-[#4EA4CD] bg-clip-text text-transparent md:pb-[150px]'>Porque Elegirnos?</h3>


        <div className='flex flex-wrap gap-3 justify-center w-full max-w-[1000px]'>

        {cardContent.map((card)=>(
    

    <article
      className="rounded-xl shadow-2xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5  transition hover:shadow-sm dark:shadow-gray-700/25  max-w-[280px] sm:max-w-[300px]"
    >
      <div className="rounded-[10px] bg-white p-4  dark:bg-gray-900 sm:p-6   max-h-[400px] flex flex-col min-h-[300px] items-center">
        
        <img src={card.imagen}  alt={card.titulo} className='w-[30%] mb-8 mt-2' />
          
        

        <div  className='self-start'>
          <h3 className=" text-[17px] p-2 pb-0 font-bold text-gray-900 dark:text-white">
            {card.titulo}
          </h3>
        </div>

        <div className="mt-4 p-2  gap-1 self-start">
          <p className='text-sm text-gray-300 '>
            {card.texto}

          </p>
        </div>
      </div>
    </article>

    ))}
        </div>



    


    </div>
  )
}

export default PorqueElegirnos