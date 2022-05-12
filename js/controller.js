// importar modulos
import { ampliarInfo } from "./ampliarInfo.js";
import { pintarTienda } from "./llenadoTienda.js";
import { pintarCarrito } from "./pintarCarrito.js";
//import { resumencar } from "./resumencar.js";
// llamar modulo de pintar
pintarTienda()
//pintarCarrito()


let producto={}

// llamar mudulo más info

let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){
    if(event.target.classList.contains("btn")){
        let modalInfo = new bootstrap.Modal(document.getElementById('modalInfo'))
        producto=ampliarInfo(event)
        modalInfo.show()
    }
})
// // llamar mudulo resumen

// let contenedorVenta=document.getElementById("fila")
// contenedorVenta.addEventListener("click",function(event){
//     if(event.target.classList.contains("btncarrito")){
//         let modalInfo = new bootstrap.Modal(document.getElementById('resumenCar'))
//         producto=resumencar(event)
//         modalInfo.show()
//     }
// })

//-----------------------------------------------//

//carrito arreglo de productos
let carrito=[]
// accion añadir
let boton = document.getElementById("btnAdd")
boton.addEventListener('click',function(event){
    console.log(carrito)

    let cantidad=document.getElementById("cantProd").value
    // agregar cant obj prod
    producto.cantidad=cantidad

    // adjuntar producto
    for(let i =0; i < carrito.length ; i++){
        if(carrito[i].nombre.trim()=== producto.nombre.trim()){
            carrito[i].cantidad++
            return null;
        }
    }
    //agar prod al crrto
    carrito.push(producto)

    // calcular suma de cant

    let suma=0
    carrito.forEach(function(producto){
        // console.log(producto.cantidad)
        suma=suma+Number(producto.cantidad)
    });
    pintarCarrito(suma)
    
    let subtotal=0
        carrito.forEach(function(producto){
        //subtotal=subtotal*Number(producto.precio)
        //subtotal=cantidad*Number(producto.precio)
        subtotal=cantidad*Number(producto.precio)
        console.log("EL SUBTOTAL "+subtotal)
    });

})
let btnconvert = document.getElementById("btnconvert")
btnconvert.addEventListener("click",function(event){
    let cantidad=document.getElementById("cantProd").value
    // agregar cant obj prod
    producto.cantidad=cantidad
    cantidad*Number(producto.precio)
    console.log("EL SUBTOTAL "+cantidad)
})


    let btncarrito = document.getElementById("btncarrito")
    btncarrito.addEventListener("click",function(event){
        //console.log("carrito")

        let contenedor=document.getElementById("contenedorVenta")
        let modalVenta = new bootstrap.Modal(document.getElementById('resumenCar'))
        // borrar el contenido HTML de una sección
        contenedor.innerHTML=""
        // recorrer carrrito para pintar

        carrito.forEach(function(producto){
            // traversing

            let fila=document.createElement("div")
            fila.classList.add("row")

            let col=document.createElement("div")
            col.classList.add("col-12","col-mb-4")

            let col2=document.createElement("div")
            col2.classList.add("col-12","col-mb-8")

            let foto=document.createElement("img")
            foto.classList.add("img-fluid","col-md-5")
            foto.src=producto.foto

            let titulo=document.createElement("p")
            titulo.classList.add("col-md-7")
            titulo.textContent="Producto: "+producto.nombre

            let precio=document.createElement("p")
            precio.classList.add("col-md-7")
            precio.textContent="Valor Unitario: "+producto.precio

            let cantidad=document.createElement("p")
            cantidad.classList.add("col-md-7")
            cantidad.textContent="Cantidad agregada: "+producto.cantidad

            // let subtotal=document.createElement("p")
            // subtotal.classList.add()
            // subtotal.textContent=producto.subtotal
            // subtotal.textContent=producto.subtotal


            col.appendChild(foto)
            col2.appendChild(titulo)
            col2.appendChild(precio)
            col2.appendChild(cantidad)
            // col2.appendChild(subtotal)
            //col2.appendChild(boton)
            fila.appendChild(col)
            fila.appendChild(col2)
            contenedor.appendChild(fila)
        })
        modalVenta.show()
        let btnlimcar = document.getElementById("btnlimcar")
        btnlimcar.addEventListener("click",function(event){
            carrito=[]
            let capsula= document.getElementById("capsula")
            capsula.textContent = 0
            capsula.classList.add("invisible")
        })

    })