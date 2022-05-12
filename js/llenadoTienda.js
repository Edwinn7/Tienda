export function pintarTienda(){
    let productos=[
        {nombre:"Procesador gamer AMD Ryzen 5 5600",precio:3000000,foto:"img/productos/ryzen.jpg",descripscion:"Clave en el rendimiento de tu computador de escritorio, ya no tienes que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles."},
        {nombre:"MSI MAG B550 TORPEDO",precio:617000,foto:"img/productos/msi.jpg",descripscion:"La serie MAG nació a través de rigurosas pruebas de calidad y está diseñada para ser un símbolo de robustez y durabilidad. Centrada en proporcionar la mejor experiencia de usuario, la serie MAG tiene un proceso de instalación simple junto con una interfaz de usuario amigable que la convierte en la mejor opción para los jugadores de nivel básico."},
    
        {nombre:"RAM corsair RGB 16gb DDR5",precio:339000,foto:'img/productos/RAM.jpg',descripscion:"La memoria con overclocking DDR4 Corsair Vengeance RGB Pro ilumina el PC con un efecto hipnótico gracias a la iluminación RGB dinámica multizona, además de ofrecer las mejores características de las DDR4 en cuanto a rendimiento."},
    
        {nombre:"fuente de alimentación corsair RM 750",precio:418000,foto:"img/productos/RM750.jpg",descripscion:"Las fuentes de alimentación completamente modulares y de nivel sonoro ultrarreducido CORSAIR RM Series con varios conectores EPS12V proporcionan una potencia eficiente a su PC gracias a la certificación 80 PLUS Gold"},
    
        {nombre:"SSD Samsung 1TB PCIe3.0",precio:555000,foto:"img/productos/SSD.jpg",descripscion:"La unidad Samsung 980 hereda el legado de la innovadora tecnología SSD de Samsung. Dispone de una fantástica fiabilidad"},
    
        {nombre:"Refrigeración Líquida Cooler Master",precio:286000,foto:"img/productos/liquida.jpg",descripscion:"contiene  dos ventiladores PWM  de 120 mm RGB con una alta presión estática de 2,36  mm H2O."},
    
        {nombre:"Disco duro SEAGATE 2TB SATA 3",precio:220000,foto:"img/productos/discoduro.jpg",descripscion:"Seagate incorpora más de 20 años de rendimiento y fiabilidad dignos de confianza a las unidades de disco duro Seagate® BarraCuda® de 3,5 pulgadas."},
    
        {nombre:"Cooler Master Hyper 212 RGB",precio:154347 ,foto:"img/productos/Cooler.jpg",descripscion:" ofrece una mejor instalación y un gran rendimiento, y es una de las mejores soluciones de enfriamiento de aire. "},
    
        {nombre:"MSI Optix G241VC 23.6",precio:829064 ,foto:"img/productos/Monitor.jpg",descripscion:" utiliza el panel curvo Samsung de alta calidad con muchas características especiales para los jugadores, lo que les ayudará a disfrutar del maravilloso mundo del juego."},
    
        {nombre:"HyperX Cloud II Auriculares Gaming 7.1 Rojos",precio:396892 ,foto:"img/productos/auriculares.jpg",descripscion:"El diseño es totalmente gamer, agresivo, atrevido y sobre todo, molón de narices. Disfruta de unos auriculares gaming con calidad de estudio fabricados con materiales de alta calidad."}
    ]
    
    // referencia al componente padre
    
    let fila=document.getElementById("fila")
    
    
    // recorriendo un arreglo con js
    
    productos.forEach(function(producto){
        // console.log(producto.nombre)
        // console.log(producto.precio)
        // console.log(producto.foto)
        // console.log(producto.descripscion)
        // píntar con js
    
        //1) crear la esctructura necesaria
    
        //crear la columna
    
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        // crear la tarjeta
    
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
        // agregar imgn
        let foto=document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src=producto.foto
        
        // titulo
        let titulo=document.createElement("h4")
        titulo.classList.add("text-center")
        titulo.textContent=producto.nombre

        // desc 
        let descripscion=document.createElement("h6")
        descripscion.classList.add("modal-body")
        descripscion.textContent=producto.descripscion
        // precio
        let precio=document.createElement("h7")
        precio.classList.add("modal-body")
        precio.textContent=" COP "+producto.precio
        // crear boton
        let boton=document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-dark","mx-4","mb-4")
        boton.textContent="Ver producto"
        
        
        //2) ordenar la estructura
    
        tarjeta.appendChild(foto)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(descripscion)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(boton)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        
    })
}

