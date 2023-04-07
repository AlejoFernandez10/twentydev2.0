
import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
const Template = ({image, title, icon, id}) => {


    
   

  return (
    <Link to={`/templates/${id}`} key={id} className="template mb-[80px] m-auto w-[95%] max-w-[400px] rounded-[8px] scale-100 hover:scale-105 transition duration-200 ">
            <h4 className="text-[23px] text-center mb-[10px] text-[#ddd]">{title}</h4>

              <div className="detailsContainer">

                <div  className="template-link relative" target="_blank">

                <img src={image} className='template-img h-[160px] m-auto md:h-[186px] '  alt={`${title}`} />
                <div className="img-gradient" ></div>
                <button className="template-Detail-btn "><a href="#" className='flex flex-col '><img src={icon} alt="ver" /> </a></button>

              </div> 


              </div>

          </Link>
  )
}

export default Template