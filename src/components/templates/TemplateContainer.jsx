
import React from 'react'

import { useState } from 'react'


import '../../App.css'
import TemplateList from './TemplateList'



import coffeShopimage   from "../../assets/templates/coffee-shop.webp"
import Gymimage   from  "../../assets/templates/gymTemplate.webp"
import ecommerceImage   from "../..//assets/templates/E-commerce.jpeg"
import verIcon from '../../assets/ver.png'


const TemplateContainer = () => {

  const data =[
    {
      title:"Coffe shop",
      image: coffeShopimage,
      
      verIcon:verIcon,
      description:"Esta aplicacion simula un sitio web para Coffe-Shops, tiene una bienvenida atractiva y moderna. El usuario podra crear su pedido personalizado y agregarlo al carrito. También se pueden visualizar distintos kits 'Precreados' los cuales tambien se pueden agregar al carrito. Por último el usuario también podrá contactar al Coffe-Shop mediante un formulario de contacto moderno. El footer del sitio contiene solamente el logo y redes sociales pero puede ser modificado sin costo adicional",
      id:"JA87hd82hF3",
      bagde:"Coffe-shop",
      color:"#6d4c41"
      
    },
    {
      title:"Gym Site",
      verIcon:verIcon,
       image: Gymimage,
      
      description:"Esta aplicación simula un sitio web para Gimnasios, tiene una bienvenida moderna y atractiva. Se muestran las actividades que posee disponible el gimnasio y fechas de clases para esas actividades. Cuenta con una seccion de Planes o Membresias las cuales el usuario podrá agregar al carrito. Por último el usuario podrá contactar al gimnasio presionando el icono de Whatsapp via esa misma aplicación, en caso de querer un formulario de contacto se puede agregar sin costo adicional .El footer del sitio contiene solamente el logo y las redes sociales pero puede ser modificado sin costo adicional",
      id:"lUJJFck0292q32",
      bagde:"Gym Site",
      color:"#1fe1ba"
      
    },
  
    {
      title:"Tienda E-commerce",
      image: ecommerceImage,
      verIcon:verIcon,
      description:"Esta aplicación simula un sitio web para una Tienda E-commerce, es una aplicación super completa que cuenta con un slider muy atractivo en la bienvenida. El usuario podrá navegar entre los distintos productos de la tienda teniendo la posibilidad de agregarlos al carrito. También es posible la creación de una cuenta y el inicio de sesión. En caso de tener iniciada la sesion el usuario podra acceder a una seccion donde se detallará su historial de compras en la tienda",
      id:"0034PLCACqwtf",
      bagde:"E-commerce",
      badge2:true,
      color:"pink",
       
    }
  ]  

  const [loader, setLoader] = useState(true)


  setTimeout(() => {
    setLoader(false)
  }, 1000);


  if(loader){
    return(
      <div className='h-[100vh] w-full flex justify-center items-center'>
        <span class="loader "></span>
      </div>
    )
  }else{
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
