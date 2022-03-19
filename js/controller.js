// importar modulos
import { ampliarInfo } from "./ampliarInfo.js";
import { pintarTienda } from "./llenadoTienda.js";
// llamar modulo de pintar
pintarTienda()


// llamar mudulo más info

let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){
    let modalInfo = new bootstrap.Modal(document.getElementById('modalInfo'))
    ampliarInfo(event)
    modalInfo.show()
} )