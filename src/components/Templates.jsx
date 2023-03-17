
import React from 'react'

import coffeShopImg from "../assets/templates/coffee-shop.webp";
import gymTemplateImg from '../assets/templates/gymTemplate.webp';
import pcEcommerceImg from '../assets/templates/pc-ecommerce.webp';
import verIcon from '../assets/ver.png'


import '../App.css'

const templateData = [
  {
    title:"Coffe shop",
    image:`${coffeShopImg}`,
    icons:`${verIcon}`
  },
  {
    title:"Gym Site",
    image:`${gymTemplateImg}`,
    icons:`${verIcon}`
  },
  {
    title:"Pc ecommerce",
    image:`${pcEcommerceImg}`,
    content:"Coming soon..."    
  },
  {
    title:"Tienda e-commerce",
    image:`${pcEcommerceImg}`,
    content:"Coming soon..."    
  }

]




const Templates = () => {
  return (
    <>
    <div id="template" className=' h-[10px] w-full'></div>
<div className="template-main-container   min-h-[100vh] flex flex-col items-center justify-center" >
      <h3 className=" text-center mt-20 mb-[60px] text-[35px] bg-gradient-to-r from-[#4EA4CD]  to-[#9FF9FF] bg-clip-text text-transparent sm:text-[40px] md:text-[45px] lg:mb-20">Templates</h3>

      <div className="templates-container  m-auto w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center">

        

        {templateData.map((template)=>(
          <div className="template mb-[80px] m-auto w-[95%] max-w-[400px] rounded-[8px] scale-100 hover:scale-105 transition duration-200 " data-aos="fade-up">
            <h4 className="text-[23px] text-center mb-[10px] text-[#ddd]">{template.title}</h4>

              <div className="detailsContainer">

                <div  className="template-link relative" target="_blank">

                <img srcSet={template.image} className='template-img  '  alt="coffee-shop template" />
                <div className="img-gradient" ></div>
                <button className="template-Detail-btn "><a href="#" className='flex flex-col'><img src={template.icons} alt="" /> <span className='text-white right-[-60px] top-[20px] absolute whitespace-nowrap'>{template.content}</span></a></button>

              </div> 


              </div>

          </div>
          
        ))}        

    </div>    
        
</div>

<div className="" style={{textAlign:"center",width:"100%"}}>
  <p style={{color:"rgb(148 163 184)",marginBottom:"50px"}}>Si te interesa lo que ves, no dudes en contactarnos!</p>
  
 </div>

</>
  )
}

export default Templates
