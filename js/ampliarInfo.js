export function ampliarInfo(event){
    let producto={}
    if(event.target.classList.contains("btn")){
        
        producto={
            foto:event.target.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("h4").textContent,
            precio:event.target.parentElement.querySelector("h7").textContent,
            descripscion:event.target.parentElement.querySelector("h6").textContent
        }
        
        let foto=document.getElementById("fotoInfo")
        foto.src=producto.foto
        
        let nombre =document.getElementById("nombreInfo")
        nombre.textContent=producto.nombre
        
        let precio=document.getElementById("precioInfo")
        precio.textContent=producto.precio
        
        let descripscion=document.getElementById("descInfo")
        descripscion.textContent=producto.descripscion
        
        return producto
        
    }
}