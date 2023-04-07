import React from 'react'

import TemplateDetail from './TemplateDetail' 

import coffeShopimage   from "../../assets/templates/coffee-shop.webp"
import coffeShopimage1  from "../../assets/templates/coffe-shopT/imagen-1.webp"
import coffeShopimage2  from "../../assets/templates/coffe-shopT/imagen-2.webp"
import coffeShopimage3  from "../../assets/templates/coffe-shopT/imagen-3.webp"
import coffeShopimage4  from "../../assets/templates/coffe-shopT/imagen-4.webp"
import Gymimage   from  "../../assets/templates/gymTemplate.webp"
import Gymimage1   from "../../assets/templates/gymSiteT/imagen-1.webp"
import Gymimage2   from "../../assets/templates/gymSiteT/imagen-2.webp"
import Gymimage3   from "../../assets/templates/gymSiteT/imagen-3.webp"
import Gymimage4   from "../../assets/templates/gymSiteT/imagen-4.webp"
import ecommerceImage   from "../..//assets/templates/E-commerce.jpeg"
import ecommerceImage1   from "../../assets/templates/e-commerceT/imagen-1.webp"
import ecommerceImage2   from "../../assets/templates/e-commerceT/imagen-2.webp"
import ecommerceImage3   from "../../assets/templates/e-commerceT/imagen-3.webp"
import ecommerceImage4   from "../../assets/templates/e-commerceT/imagen-4.webp"
import verIcon from '../../assets/ver.png'



const TemplateDetailContainer = () => {
  
  const data =[
    {
      title:"Coffe shop",
      image: coffeShopimage,
      image1: coffeShopimage1,
      image2: coffeShopimage2,
      image3: coffeShopimage3,
      image4: coffeShopimage4,
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
      image1: Gymimage1,
      image2: Gymimage2,
      image3: Gymimage3,
      image4: Gymimage4,
      description:"Esta aplicación simula un sitio web para Gimnasios, tiene una bienvenida moderna y atractiva. Se muestran las actividades que posee disponible el gimnasio y fechas de clases para esas actividades. Cuenta con una seccion de Planes o Membresias las cuales el usuario podrá agregar al carrito. Por último el usuario podrá contactar al gimnasio presionando el icono de Whatsapp via esa misma aplicación, en caso de querer un formulario de contacto se puede agregar sin costo adicional .El footer del sitio contiene solamente el logo y las redes sociales pero puede ser modificado sin costo adicional",
      id:"lUJJFck0292q32",
      bagde:"Gym Site",
      color:"#1fe1ba" 
    },
  
    {
      title:"Tienda E-commerce",
      image: ecommerceImage,
      image1: ecommerceImage1,
      image2: ecommerceImage2,
      image3: ecommerceImage3,
      image4: ecommerceImage4,
      verIcon:verIcon,
      description:"Esta aplicación simula un sitio web para una Tienda E-commerce, es una aplicación super completa que cuenta con un slider muy atractivo en la bienvenida. El usuario podrá navegar entre los distintos productos de la tienda teniendo la posibilidad de agregarlos al carrito. También es posible la creación de una cuenta y el inicio de sesión. En caso de tener iniciada la sesion el usuario podra acceder a una seccion donde se detallará su historial de compras en la tienda",
      id:"0034PLCACqwtf",
      bagde:"E-commerce",
      color:"pink"   
    }
  ]  

  
    
  
    if(data){
    
          return (
          <>
          
      <div className="template-main-container   min-h-[100vh] flex flex-col " > 
      
           
    
              
            <div className='pt-[10px]   w-full flex  justify-center items-center'> 
                <TemplateDetail props={data} />
                
             </div>       
      
          
              
      </div>
      
      <div className="text-center w-full" >
        <p style={{color:"rgb(148 163 184)"}}>Si te interesa lo que ves, no dudes en contactarnos!</p>
        
       </div>
      
      </>
        )
    
      }
  
}

export default TemplateDetailContainer