
    const expresionesFormularios = {
        nombre:/^[a-zA-ZÀ-ÿ\s]{3,40}$/, //Letras y espacios pueden llevar acentos
        correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,  
        telefono:/^\d{7,14}$/ //7 a 14 numeros    
    }
    
    const campos={
        nombre:false,
        correo:false,
        telefono:false
    }
    
    
    const formulario = document.getElementById(`form`)
    const inputs = document.querySelectorAll(`#form input`)
    
    
    
    const validarForm = (e)=>{
    
        if(e.target.name === "name"){
            if(expresionesFormularios.nombre.test(e.target.value)){
                const nameForm =document.getElementById(`nameForm`)
                nameForm.firstElementChild.style.border = "1px solid green"
                nameForm.lastElementChild.style.display = "none"
                campos.nombre = true;
            }else{
                const nameForm = document.getElementById(`nameForm`)
               nameForm.firstElementChild.style.border =  "1px solid red"
               nameForm.lastElementChild.style.display = "inline"
               campos.nombre = false;
            } 
        }
    
            if(e.target.name === "number"){
                if(expresionesFormularios.telefono.test(e.target.value)){
    
                    const numberForm = document.getElementById(`numberForm`);
                    numberForm.firstElementChild.style.border = "1px solid green";
                    numberForm.lastElementChild.style.display = "none"
                    campos.telefono = true
    
                }else{
                    const numberForm = document.getElementById(`numberForm`);
                    numberForm.firstElementChild.style.border = "1px solid red"
                    numberForm.lastElementChild.style.display = "inline"
                    campos.telefono = false;
                } 
            }
    
            if(e.target.name === "mail"){
                if(expresionesFormularios.correo.test(e.target.value)){
                    const mailForm = document.getElementById(`mailForm`)
                    mailForm.firstElementChild.style.border = "1px solid green"
                    mailForm.lastElementChild.style.display = "none"
                    campos.correo = true
                }else{
                    const mailForm = document.getElementById(`mailForm`)
                    mailForm.firstElementChild.style.border = "1px solid red"
                    mailForm.lastElementChild.style.display = "inline"
                    campos.correo = false;
                } 
            }
    
            
        
    }
    
    
    inputs.forEach((input)=>{
            input.addEventListener('keyup',validarForm)
            input.addEventListener('blur',validarForm)
        })
        
    
    
    
    
        formulario.addEventListener(`submit`,(e)=>{
    
            if(campos.nombre === false || campos.correo === false || campos.telefono === false){
                e.preventDefault()
            }
        })
    
        




   
