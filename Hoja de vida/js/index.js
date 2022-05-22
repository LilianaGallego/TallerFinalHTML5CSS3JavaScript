function cambiarMenu(){
    let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open')
}

let btn_lightpink = document.getElementById('btnlightpink');
let btn_aquamarine = document.getElementById('btnaquamarine'); 
let btn_lightgreen = document.getElementById('btnlightgreen'); 
let fondoPagina = document.querySelector('body');


function cambiarColorBtn1(){
    if(btn_lightpink.value == "lightpink"){
        fondoPagina.style.backgroundColor = btn_lightpink.value;
        console.log(btn_lightpink);
    }
}

function cambiarColorBtn2(){
    if(btn_aquamarine.value == "aquamarine"){
        fondoPagina.style.backgroundColor = btn_aquamarine.value;
        console.log(btn_aquamarine);
    }
}

function cambiarColorBtn3(){
    if(btn_lightgreen.value == "lightgreen"){

        fondoPagina.style.backgroundColor = btn_lightgreen.value;
        console.log(btn_lightgreen);
    }
}

let acordeon = document.getElementsByClassName("btn-titulo");

for (let i = 0; i < acordeon.length; i++) {
    
    acordeon[i].addEventListener("click",function(){
        this.classList.toggle("active");
        let txt = this.nextElementSibling;
        if (txt.style.display == "block"){
            txt.style.display = "none";            
        } else{
            txt.style.display = "block";
        }
    }); 
    
}

     
