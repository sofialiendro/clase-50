const grilla = document.querySelector(".grilla")
const parrafoConHijo = document.querySelector("#parrafoConHijo")
const hijoDelParrafo = document.querySelector("span")

hijoDelParrafo.parentElement // parrafoConHijo
parrafoConHijo.children // siempre nos devuelve una coleccion --> no es lo mismo que hijoDelParrafo

// previousElementSibling
// nextElementSibling 
// crear elementos de html 
const lista = document.createElement("ul")
const li = document.createElement("li")
li.textContent = "Este es texto agregado desde JS"
li.style.color = "pink"
li.classList.add("li-rosa")

lista.appendChild(li)
grilla.appendChild(lista)

grilla.removeChild(grilla.children[5])
grilla.innerHTML = ""


// Callbacks: una funcion que se pasa como parámetro a otro método
//ej: el metodo onclick

const boton = document.querySelector("button")

boton.onclick = () => {
    alert("apretaste un boton")
}





const mostrarEnConsola = (mensaje) => {
    console.log(mensaje)
}

const funcionQueRecibeOtraFuncion = (funcion) => {
    funcion("estoy adentro de una funcion")
}
  
funcionQueRecibeOtraFuncion(mostrarEnConsola)
  
  
  
setTimeout(() => { // recibe callbacks, sirve para hacer algo despues de que pase cierto tiempo
    console.log("Pasaron 2 segundos")
}, 2000) 

(1000) //un segundo
(1000 * 60) //un minuto
(1000 * 60 * 60) //una hora