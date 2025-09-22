const correoMostrado = document.getElementById("correo-mostrado");
const correoGuardado = localStorage.getItem("correoUsuario");
if (correoGuardado){
    correoMostrado.textContent = correoGuardado;
} 
else {
    correoMostrado.textContent = "tu correo";
}

const botonContinuar = document.getElementById("boton-continuar");
botonContinuar.addEventListener("click", () =>{
    const codigo = document.getElementById("codigo").value;
    if (codigo.trim() === ""){
        alert("Por favor ingresa el código de verificación.");
    }
    else {
        window.location.href="../../HTML/Visitante/ingreso.html";
    }
});

const enlaceReenviar = document.getElementById("reenviar");

enlaceReenviar.addEventListener("click", (e) =>{
    e.preventDefault();
    alert("Se ha reenviado el código a " + (correoGuardado || "tu correo"));
});