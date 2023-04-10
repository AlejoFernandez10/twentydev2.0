
import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
const Template = ({image, title, icon, id, badge2}) => {


    
   

  return (
    <Link to={`/templates/${id}`} key={id} className="template mb-[80px] m-auto w-[95%] max-w-[400px] rounded-[8px] scale-100 hover:scale-105 transition duration-200 ">
            <h4 className="text-[23px] text-center mb-[10px] text-[#ddd]">{title}</h4>

              <div className="detailsContainer">

                <div  className="template-link relative" target="_blank">

                  <div className='relative'>

                  <img src={image} className='template-img h-[160px] m-auto md:h-[186px] '  alt={`${title}`} />
                  
                  

                  {badge2 &&
                  <span
                  className="inline-flex items-center justify-center absolute rounded-[10px] m-2 bg-[#5FB5DE] px-2.5 py-0.5 text-white top-0 right-0"
                >
                  
                
                  <p className="text-sm whitespace-nowrap">New</p>
                </span>
                
                  }

                 
                  
                  </div>

                <div className="img-gradient" ></div>
                <button className="template-Detail-btn "><a href="#" className='flex flex-col '><img src={icon} alt="ver" /> </a></button>

              </div> 


              </div>

          </Link>
  )
}

export default Template