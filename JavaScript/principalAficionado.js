document.addEventListener ("DOMContentLoaded", () =>{
    const botonUsuario = document.querySelector(".boton-usuario");
    const menuDesplegable = document.querySelector(".menu-desplegable");

    botonUsuario.addEventListener("click", () =>{
        menuDesplegable.style.display = menuDesplegable.style.display === "block" ? "none" : "block";
    });

    window.addEventListener("click", (e) =>{
        if (!botonUsuario.contains(e.target) && !menuDesplegable.contains(e.target)){
            menuDesplegable.style.display = "none";
        }
    });
});