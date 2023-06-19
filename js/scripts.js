let botonNav = document.getElementById("botonNav");

let mostrar = document.getElementById("mostrar");


botonNav.addEventListener("click", ()=>{

    mostrar.classList.toggle("mostrarMenu")
});


let botonOcultar = document.getElementById("botonOcultar")

botonOcultar.addEventListener("click", ()=>{

    mostrar.classList.toggle("mostrarMenu")
});