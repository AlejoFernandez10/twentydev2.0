import React from 'react'

const Contacto = () => {
  return (
    <>
    <span className='h-[150px] w-full' id='contacto'></span>
    <div className="min-h-[90vh] w-full flex flex-col justify-center  " >

<h3 className="text-[29px] text-center text-white mt-[80px]  sm:text-[34px] lg:text-[40px] sm:mb-5 lg:mb-12" >Contactanos!</h3>

<div className="w-full h-auto grid grid-cols-1  justify-start  place-items-center sm:grid-cols-2  max-w-[1200px] m-auto mt-10" >

  <div className="h-auto mr-auto ml-auto mb-10 mt-3 sm:self-start">

    <p className="text-[#94A3B8] text-[14px]  text-left sm:text-[15px] md:text-[16px] lg:text-[18px]">Hacemos páginas web totalmente a gusto</p>
    <p className="text-[#94A3B8] text-[14px]  text-left sm:text-[15px] md:text-[16px] lg:text-[18px]">Templates 100% modificables!</p>
    <p className="text-[#94A3B8] text-[14px]  text-left sm:text-[15px] md:text-[16px] lg:text-[18px]">Envianos tu consulta o pedido!</p>
    
  </div>

  <form action='form.php' method='post' className=" flex flex-col  gap-4 justify-center  w-[100%] m-auto">

    <input type="text" name='name' placeholder="Nombre completo"  className="bg-[#0B1325] m-auto h-[60px] w-[95%] max-w-[400px] md:max-w-[550px]  rounded-[10px] p-3"  required autocomplete="off" />
    <input type="text" name='number' placeholder="Número telefónico" className="bg-[#0B1325] m-auto h-[60px] w-[95%] max-w-[400px] md:max-w-[550px]  rounded-[10px] p-3" required autocomplete="off" no-controls />
    <input type="email" name='mail' placeholder="Correo electrónico" className="bg-[#0B1325] m-auto h-[60px] w-[95%] max-w-[400px] md:max-w-[550px]  rounded-[10px] p-3" required autocomplete="off" />
    <textarea name='message' cols="30" rows="5" className="bg-[#0B1325] p-3 m-auto w-[95%] max-w-[400px] md:max-w-[550px] " placeholder="Deja tu consulta ..." required autocomplete="off"></textarea>
    <button type='submit' className=' w-[120px] m-auto mt-10 mb-20 px-4 py-[0.8rem] rounded-[7px] text-[#5FB5DE] border border-[#5FB5DE] transition duration-200 hover:text-white hover:bg-[#5FB5DE] ' >Enviar!</button>
    
  </form>
  
</div>

</div>
    </>
  )
}

export default Contacto