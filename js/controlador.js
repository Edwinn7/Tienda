//variables
let nombreUsuario="aaa"
let estaturaUsuario=1.50
let edadUsuario=50
let telefonoUsuario="505050"
let esP=true //(BANDERAS)
const APELLIDOS_USUARIO="aaasaa"

/* if(true){
    let nombreUsuario="James"

}

// salidas
console.log(nombreUsuario)
*/
// CONCATENAR

// 1 console.log('Buenas Tardes ' + nombreUsuario + ' su edad es ' + edadUsuario + ' años ' )

// console.log(`Buenas Tardes ${nombreUsuario} su edad es ${edadUsuario} años`)

// DOM
let etiquetaTitulo=document.getElementById("titulo")
// console.log(etiquetaTitulo)

etiquetaTitulo.textContent="aaaaaaaaaa"
//console.log (etiquetaTitulo.classList)
etiquetaTitulo.classList.add('text-danger')
etiquetaTitulo.classList.add('text-center')

let barraNavega=document.getElementById('barraNavega')
barraNavega.textContent="Pagina"

let fondopc=document.getElementById('fondopc')
fondopc.src="img/fondo2.jpg"

