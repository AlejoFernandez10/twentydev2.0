import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





const TemplateDetail = ({props}) => {

    
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const {id} = useParams()
    const templateFilter = props.filter((template)=> template.id == id)
    



  return (
    <>
    {templateFilter?.map((template)=>(

       <div key={template.id}>
       <div className=" mx-auto  max-w-screen-xl px-4 pt-[200px] ">
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">


         <div className='bg-[#5FB5DE] z-0  blur-[80px] h-[120px] bottom-[30%] left-[0] w-[120px]  md:h-[150px]  md:w-[150px] md:blur-[100px] lg:h-[200px] lg:w-[200px] lg:blur-[100px] absolute xl:h-[270px] xl:w-[300px] xl:blur-[300px]'></div>
        {/*  SLIDER */}    <div  className=' '>

                 
           <Swiper  
           style={{
            "--swiper-navigation-size": "35px",
            "--swiper-navigation-color": "#5FB5DE",
          }}
      
                         modules={[FreeMode, Navigation, Thumbs]}

                         thumbs={{ swiper: thumbsSwiper }}
                         navigation
                         loop={true}
                         pagination={{ clickable: true }}


                         className='w-full h-[100%] MySwiper2 m-0 p-0'
                             >
                          <SwiperSlide> <img
                                   alt={template.title}
                                   srcSet={template.image}  
                                   className=' w-full object-contain'             
                                 />
                         </SwiperSlide>

                          <SwiperSlide> <img
                                   alt={template.title}
                                   srcSet={template.image1}
                                   className="w-full object-contain "
                                 />
                         </SwiperSlide>

                          <SwiperSlide> <img
                                   alt={template.title}
                                   srcSet={template.image2}
                                   className="w-full object-contain  "
                                 />
                         </SwiperSlide>

                          <SwiperSlide> <img
                                   alt={template.title}
                                   srcSet={template.image3}
                                   className="w-full object-contain "
                                 />
                         </SwiperSlide>
                         <SwiperSlide> <img
                                   alt={template.title}
                                   srcSet={template.image}
                                   className="w-full object-contain "
                                 />
                         </SwiperSlide>
                         </Swiper>


                             <Swiper

                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper mt-6 p-0"
                                      >
                                   

                                   <SwiperSlide> <img
                                            alt={template.title}
                                            srcSet={`${template.image1}`}
                                            className="w-full object-contain  cursor-pointer opacity-80 hover:opacity-90"
                                          />
                                  </SwiperSlide>

                                   <SwiperSlide> <img
                                            alt={template.title}
                                            srcSet={`${template.image2}`}
                                            className="w-full object-contain   cursor-pointer opacity-80 hover:opacity-90"
                                          />
                                  </SwiperSlide>

                                   <SwiperSlide> <img
                                           alt={template.title}
                                           srcSet={`${template.image3}`}
                                           className="w-full object-contain  cursor-pointer opacity-80 hover:opacity-90"
                                         />
                                     </SwiperSlide>
                                     <SwiperSlide> <img
                                           alt={template.title}
                                           srcSet={`${template.image4}`}
                                           className="w-full object-contain  cursor-pointer opacity-80 hover:opacity-90"
                                         />
                                     </SwiperSlide>
                                     
                             </Swiper>

                            </div>
          
      
     
           <div className="sticky top-0">
             <strong
               className="rounded-full border   px-3 py-0.5 text-xs font-medium tracking-wide " style={{borderColor:`${template.color}`, color:`${template.color}`}}
             >
              Detalles
             </strong>
     
             <div className="mt-8 flex justify-between">
               <div className="max-w-[35ch] space-y-2">
                 <h1 className="text-xl font-bold sm:text-2xl mb-6 text-gray-100">
                  {template.title}
                 </h1>
     
                 
     
                 <div className="-ml-0.5 flex">
                   <svg
                     className="h-5 w-5 text-yellow-400"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                   >
                     <path
                       d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                     />
                   </svg>
     
                   <svg
                     className="h-5 w-5 text-yellow-400"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                   >
                     <path
                       d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                     />
                   </svg>
     
                   <svg
                     className="h-5 w-5 text-yellow-400"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                   >
                     <path
                       d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                     />
                   </svg>
     
                   <svg
                     className="h-5 w-5 text-yellow-400"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                   >
                     <path
                       d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                     />
                   </svg>
     
                   <svg
                     className="h-5 w-5 text-yellow-400"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                   >
                     <path
                       d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                     />
                   </svg>
                 </div>
               </div>
     
               <p className="text-lg font-bold text-[#0CC0DF] ">Template </p>
             </div>

             <p className="text-sm text-gray-50 mt-3" >Descripcion:</p>
     
              <div className="mt-4">
               <div className="prose max-w-none ">
                 <p className='text-[13px] md:text-sm text-left text-gray-100'>
                   {template.description}
                 </p>
                 
               </div>
              </div> 
      
              
             

              
             
           </div>
         </div>
       </div>
     </div>
    ))}

    </>  
  )
}

export default TemplateDetail





