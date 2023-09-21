import { barcelona, roma, paris, londres } from "./ciudades.js";


let enlaces = document.querySelectorAll('a')

let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

console.log(enlaces)


//Agregar evetno click en enlaces 

enlaces.forEach(function (enlace) {  // el forEach recorre cada uno de los seleccionados y le aplical a funcioan 

    enlace.addEventListener('click', function () {
        //REMOVER ACTIVO 
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        //agregar la clase 'active0 al enlce actual 
        this.classList.add('active')
        //AGREGAR ACTIVE A LQUE CORRESPONDA 

        // obetener el contenido 
        let contenido = obtenerContenido(this.textContent)



        //TRAER INFORMACION DEL OBJETO CORREPONTIDENTE A LA ELECCION 

        //MOSTRAR EN EL CONTERNIDO DOM 
        tituloElemento.innerHTML  =contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo 
        precioElemento.innerHTML = contenido.precio 

    })


})

//Funcion para traer la informacion correcta desde cidudades.js

function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres,
    }
    return contenido[enlace]
}