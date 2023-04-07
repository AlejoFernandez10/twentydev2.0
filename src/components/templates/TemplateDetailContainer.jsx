import React from 'react'
import TemplateDetail from './TemplateDetail' 
import data from '../../data.json'



const TemplateDetailContainer = () => {
  
  
    
  
    if(data){

        return (
          <>
          
      <div className="template-main-container   min-h-[100vh] flex flex-col " > 
      
           
    
              
            <div className='pt-[10px]   w-full flex  justify-center items-center'> 
                <TemplateDetail props={data} />
                
             </div>       
      
          
              
      </div>
      
      <div className="" style={{textAlign:"center",width:"100%"}}>
        <p style={{color:"rgb(148 163 184)"}}>Si te interesa lo que ves, no dudes en contactarnos!</p>
        
       </div>
      
      </>
        )
    
      }
  
}

export default TemplateDetailContainer