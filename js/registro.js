import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let btnregistro=document.getElementById("btnregistro")
let modalInformativo = new bootstrap.Modal(document.getElementById('modalInformativo'))

btnregistro.addEventListener("click",function(evento){
    evento.preventDefault()

    let correo =document.getElementById("correo").value
    let contrasena=document.getElementById("contrasena").value
   // console.log(correo,contrasena)

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, correo, contrasena)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // ...
        //console.log("exito")
        let textoInfo= document.getElementById("infogeneral")
        let formularioregist = document.getElementById("formularioregist")
        formularioregist.reset()
        textoInfo.textContent="Exito al registrar"
        modalInformativo.show()
        setTimeout(function(){
            modalInformativo.hide()
        },5000)

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..

        // ocultar modal
        // setTimeout(function(){
        //     modalInformativo.hide()
        // },5000)

        let textoInfo= document.getElementById("infogeneral")
        textoInfo.textContent="Error al registrarse   "+errorMessage
        modalInformativo.show()

        //console.log("error")
    });

})