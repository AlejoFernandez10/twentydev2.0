import React from 'react'
import Template from './Template'
import { useState } from 'react'
const TemplateList = ({props}) => {


    
  
    
      return (
         <div className="templates-container   w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 sm:mb-[160px] sm:mt-6  lg:grid-cols-3 items-center justify-start">
            
            {props.map((template)=>(

                <Template image={template.image} title={template.title} icon={template.verIcon} id={template.id} badge2={template.badge2}  />
            ))}
    
        </div>
      )
   
}

export default TemplateList