// importar modulos
import { ampliarInfo } from "./ampliarInfo.js";
import { pintarTienda } from "./llenadoTienda.js";
// import { anadir } from "./anadir.js";
// llamar modulo de pintar
pintarTienda()


let producto={}

// llamar mudulo más info

let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){
    if(event.target.classList.contains("btn")){
        let modalInfo = new bootstrap.Modal(document.getElementById('modalInfo'))
        producto=ampliarInfo(event)
        modalInfo.show()
    }
} )

//carrito arreglo de productos
let carrito=[]
// accion añadir
let boton = document.getElementById("btnAdd")
boton.addEventListener('click',function(event){
    console.log(carrito)
    let cantidad=document.getElementById("cantProd").value
    // agregar cant obj prod
    producto.cantidad=cantidad

    //agar prod al crrto
    carrito.push(producto)

    // calcular suma de cant 

    let suma=0

    carrito.forEach(function(producto){
        // console.log(producto.cantidad)
        suma=suma+Number(producto.cantidad)
    });
    // console.log(suma)

    let capsula = document.getElementById("capsula")
    capsula.textContent=suma
    capsula.classList.remove("invisible")
})
    let boton2 = document.getElementById("btnLimp")
    boton2.addEventListener("click",function(event){
        carrito=[]
        let capsula= document.getElementById("capsula")
        capsula.textContent = 0
        capsula.classList.add("invisible")
    })