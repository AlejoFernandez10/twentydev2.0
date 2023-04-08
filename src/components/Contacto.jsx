import React, {useState} from 'react'


const expresionesFormularios = {
  nombre:/^[a-zA-ZÀ-ÿ\s]{3,40}$/, //Letras y espacios pueden llevar acentos
  correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,  
  telefono:/^\d{7,14}$/ //7 a 14 numeros    
}


const Contacto = () => {

  const [campos, setCampos] = useState({
    nombre: false,
    correo: false,
    telefono: false
  });
  
  
  
    const validarCampo = (expresion, valor) => {
      return expresion.test(valor);
    }
  
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      if (name === 'name') {
        setCampos(prevState => ({
          ...prevState,
          nombre: validarCampo(expresionesFormularios.nombre, value)
        }));
      } else if (name === 'number') {
        setCampos(prevState => ({
          ...prevState,
          telefono: validarCampo(expresionesFormularios.telefono, value)
        }));
      } else if (name === 'mail') {
        setCampos(prevState => ({
          ...prevState,
          correo: validarCampo(expresionesFormularios.correo, value)
        }));
      }
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (campos.nombre && campos.correo && campos.telefono) {
        // Submit the form
        console.log('Form submitted successfully!');
      } else {
        console.log('Please fill in all the required fields!');
      }
    }



  return (
    <>
   <div className="contact-section min-h-[100vh] w-full pt-[100px] flex flex-col justify-start items-center bg-[#12192D]" id="contacto">

   <div className='bg-[#5FB5DE] z-0  blur-[80px] h-[120px] bottom-[-300px] left-[0] w-[120px]  md:h-[150px]  md:w-[150px] md:blur-[100px] lg:h-[200px] lg:w-[200px] lg:blur-[100px] absolute xl:h-[270px] xl:w-[300px] xl:blur-[220px]'></div>

      <h3 className="contact-title mt-[50px] text-gray-50 text-left self-start text-[40px]   font-normal mb-[12px] ml-[40px] sm:mb-[80px] sm:text-center sm:self-center " >Contactanos!</h3>

      <div className="form-and-info flex flex-col items-center justify-center w-[80%] max-w-[1200px] md:flex-row md:w-[90%]" >

        <div className="info self-start flex flex-col justify-center items-start text-gray-200 md:w-[50%] text-[18px] md:text-end  lg:w-[45%] lg:text-[20px] lg:mt-[20px] ">

          <p className="info-text text-xs sm:text-sm md:text-lg">Hacemos páginas web totalmente a gusto</p>
          <p className="info-text text-xs sm:text-sm md:text-lg">Templates 100% modificables!</p>
          <p className="info-text text-xs sm:text-sm md:text-lg">Envianos tu consulta o pedido!</p>

        </div>

        <form action='../form.php' onSubmit={handleSubmit} method='post' id="form" className="form flex flex-col justify-center items-center w-full gap-[20px] mt-[50px] md:w-[50%] md:mt-0 lg:w-[45%] xl:max-w-[40%]" >

          <div className='w-full'  id="nameForm">
            <input onChange={handleChange} type="text" name='name'  placeholder="Nombre completo"  className="form-input  text-gray-100 rounded w-full border-[0px] p-[15px] bg-[#0B1325] lg:p-[20px] lg:text-[18px]" required autoComplete="off" />
            <p className='text-red-600 text-sm ml-[10px] hidden'>El nombre no debe contener números ni caracteres especiales </p>
            
          </div>

          <div className='w-full'  id="numberForm"> 
            <input onChange={handleChange} type="number" name='number'  placeholder="Número telefónico" className="form-input  text-gray-100 rounded w-full border-[0px] p-[15px] bg-[#0B1325] lg:p-[20px] lg:text-[18px]" required autoComplete="off" />
            <p className='text-red-600 text-sm ml-[10px] hidden'>El numero debe tener entre 7 y 14 caracteres </p>
          </div>

          <div className='w-full' id="mailForm">
            <input onChange={handleChange} type="email" name='mail' placeholder="Correo electrónico" className="form-input  text-gray-100 rounded w-full border-[0px] p-[15px] bg-[#0B1325] lg:p-[20px] lg:text-[18px]" required autoComplete="off" />
            
            
          </div>


          <span className='self-start text-gray-100 pl-[10px]' >Asunto del mensaje</span>
          <select name="asunto" id="form-select" className="form-input  w-full border-[0px]  rounded p-[15px] bg-[#0B1325] lg:p-[20px] lg:text-[18px] text-gray-300" >
            <option >Consulta</option>
            <option >Plan Bronce</option>
            <option >Plan Oro</option>
            <option >Plan Diamante</option>
          </select>
          <textarea name='message' cols="30" rows="5" className="form-input rounded w-full border-[0px] p-[15px] bg-[#0B1325] lg:p-[20px] lg:text-[18px] text-gray-100" placeholder="Deja tu consulta ..." required autoComplete="off"></textarea>
          <input type="submit" className="submitBtn  cursor-pointer h-[3.5rem] w-[8rem] mt-[20px] rounded-[10px] border-[#4EA4CD] border-[2px] text-[#4EA4CD] transition duration-200 hover:bg-[#4EA4CD] mb-[50px] hover:text-white  hover:border-[0px]" />

        </form>

      </div>

      </div>

      
    </>
  )
 } 


export default Contacto