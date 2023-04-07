
import React from 'react'

import data from '../../data.json'



import '../../App.css'
import TemplateList from './TemplateList'






const TemplateContainer = () => {


  if(data){

    return (
      <>
      <div id="template" className=' h-[10px] w-full'></div>
  <div className="template-main-container   min-h-[100vh] flex flex-col items-center justify-center" >
        <h3 className=" text-center mt-20 mb-16 text-[35px] bg-gradient-to-r from-[#4EA4CD]  to-[#9FF9FF] bg-clip-text text-transparent sm:text-[40px] md:text-[45px] ">Templates</h3>
  
       
  
          
  
          
            
            <TemplateList props={data} />
            
                
  
      
          
  </div>
  
  <div className="" style={{textAlign:"center",width:"100%"}}>
    <p style={{color:"rgb(148 163 184)"}}>Si te interesa lo que ves, no dudes en contactarnos!</p>
    
   </div>
  
  </>
    )

  }
  
}

export default TemplateContainer
