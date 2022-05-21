let listaImpar = document.getElementsByClassName('impar');
let listaPar = document.getElementsByClassName('par');
let fondo = document.querySelector('body')
let resaltar = document.getElementsByClassName('resaltar')

function impar(){
    for (let i = 0; i < resaltar.length; i++) {
        resaltar[i].style.background= 'lightpink';
        listaImpar[i].style.color = 'red';
        resaltar[i].style.color = 'red';
        listaPar[i].style.background = 'none';
        listaPar[i].style.color = 'rgb(212, 23, 149)';
        listaPar[i].style.border = 'none';
        
    }   
    fondo.style.backgroundColor= 'lightgreen'
}

function par(){
    
    for (let i = 0; i < listaPar.length; i++) {
        listaPar[i].style.background = 'lightpink';
        listaPar[i].style.color = 'darkviolet';
        listaPar[i].style.border = '1px solid red';
        resaltar[i].style.background= 'none';
        listaImpar[i].style.color = 'rgb(212, 23, 149)';
        resaltar[i].style.color = 'rgb(212, 23, 149)';
    }   
    fondo.style.backgroundColor= 'lightsalmon'
}


