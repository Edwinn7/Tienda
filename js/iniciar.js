import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"
let btninicio = document.getElementById("btninicio")
let modalInfo = new bootstrap.Modal(document.getElementById('modalInfo'))

    btninicio.addEventListener("click",function(evento){
    evento.preventDefault()

    let correolog =document.getElementById("correolog").value
    let contrasenalog=document.getElementById("contrasenalog").value
    //console.log(correolog, contrasenalog)

    const auth = getAuth();
    signInWithEmailAndPassword(auth, correolog, contrasenalog)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //console.log(user)
        // ...
        let textoInfo= document.getElementById("infogeneral_log")
        let form_inicio = document.getElementById("form_inicio")
        form_inicio.reset()
        textoInfo.textContent="Éxito al ingresar"
        modalInfo.show()
        setTimeout(function(){
         modalInfo.hide()
         window.location.href = "index.html";
        },5000)

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        let textoInfo= document.getElementById("infogeneral_log")
        textoInfo.textContent="Error al iniciar sesión   "+errorMessage
        modalInfo.show()
    });

})