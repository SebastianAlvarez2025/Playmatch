const botonContinuar = document.querySelector(".boton-continuar");
const emailInput = document.querySelector("input[type='email']");
const passInput = document.querySelector("input[type='password']");

const usuarios = {
    "aficionado@gmail.com":{
        password: "123456789",
        redirect: "../../HTML/Aficionado/principalAficionado.html"
    },

    "jugador@gmail.com":{
        password: "123456789",
        redirect: "../../HTML/Jugador/principalJugador.html"
    }
};

if (sessionStorage.getItem("logged") === "true") {
    const rolUsuario = sessionStorage.getItem("rolUsuario");
    if(rolUsuario && usuarios[rolUsuario]){
        window.location.replace(usuarios[rolUsuario].redirect)
    }
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

    if (!regexEmail.test(email)){
        alert("Ingrese un correo válido.");
        return;
    }

    if (usuarios[email] && usuarios[email].password === password){
        alert ("Inicio de sesión exitoso.");
        sessionStorage.setItem("logged", "true");
        sessionStorage.setItem("rolUsuario", email);
        window.location.href = usuarios[email].redirect;
    } else {
        alert("Correo o contraseña incorrectos.");
        emailInput.value = "";
        passInput.value = "";
        emailInput.focus()
    }
});