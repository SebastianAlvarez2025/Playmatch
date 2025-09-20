const botonContinuar = document.querySelector(".boton-continuar");
const emailInput = document.querySelector("input[type='email']");
const passInput = document.querySelector("input[type='password']");

const usuarioValido = "aficionado@gmail.com";
const passwordValido = "123456789";

if (sessionStorage.getItem("logged") === "true") {
    window.location.replace("../HTML/principalAficionado.html");
  }

botonContinuar.addEventListener("click", function(event){
    event.preventDefault();

    const email=emailInput.value.trim();
    const password=passInput.value.trim();

    const regexEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if(email === "" || password === ""){
        alert("Por favor, complete todos los campos");
        return;
    }

    if (email === usuarioValido && password === passwordValido){
        alert ("Inicio de sesión exitoso.");
        sessionStorage.setItem("logged", "true");
        window.location.href = "../HTML/principalAficionado.html";
    } else {
        alert("Correo o contraseña incorrectos.");
        emailInput.value = "";
        passInput.value = "";
        emailInput.focus()
    }
})