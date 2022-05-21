

//se crea para hacer que el label se mueva si se introduce texto en el input
let entradas = document.getElementsByClassName('entrada');
let nombre = document.getElementById('nombre');
let correo = document.getElementById('correo');
let asunto = document.getElementById('asunto');
let mensaje = document.getElementById('mensaje');

for (let i = 0; i < entradas.length; i++) {
    //evento cuando se suelta una tecla
    entradas[i].addEventListener('keyup',function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('noMover')
        } else{
            this.nextElementSibling.classList.remove('noMover')
        }
    });
    
}

//verificacion de campos con información

function obtenerValores(){
    
    let alerta = '';
    let control = false;
   console.log(nombre.value);
    if ( nombre.value === null ||   nombre.value.trim() === '' ){
        control = true;
        alerta = "El nombre de quien envia el correo\n";
    }else{
        console.log('Nombre: ' + nombre.value);
    }

    if ( correo.value === null || correo.value.trim() === ''){
        control = true;
        alerta += "El correo electronico\n";
    }else{
        console.log('Correo: ' + correo.value);
    }

    if ( asunto.value === null || asunto.value.trim() === ''){
        control = true;
        alerta += "El asunto del correo\n";
    }else{
        console.log('Asunto: ' + asunto.value);
    }

    if ( mensaje.value === null || mensaje.value.trim() === ''){
        control = true;
        alerta += "El mensaje del correo\n"; 
    }else{
        console.log('Mensaje: ' + mensaje.value);
    }

    if (control === true){
        alert('Para enviar el formulario debe ingresar:\n'+ alerta);
    }
    return false;
}


