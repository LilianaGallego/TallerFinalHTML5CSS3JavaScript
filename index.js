let listaImpar = document.getElementsByClassName("impar");
let listaPar = document.getElementsByClassName("par");
let fondo = document.querySelector("body");
let resaltar = document.getElementsByClassName("resaltar");

function impar() {
  for (let i = 0; i < resaltar.length; i++) {
    listaImpar[i].style.background = "lightpink";
    listaImpar[i].style.color = "red";
    listaImpar[i].style.border = "2px solid red";
    listaPar[i].style.color = "rgb(65, 6, 55)";
    listaPar[i].style.background = "none";
    listaPar[i].style.border = "none";
  }
  
}

function par() {
  for (let i = 0; i < listaPar.length; i++) {
    listaPar[i].style.background = "lightpink";
    listaPar[i].style.color = "red";
    listaPar[i].style.border = "2px solid red";
    listaImpar[i].style.color = "rgb(65, 6, 55)";
    listaImpar[i].style.background = "none";
    listaImpar[i].style.border = "none";
  }
  
}
