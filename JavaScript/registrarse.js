document.addEventListener("DOMContentLoaded", () =>{
    const container = document.querySelector(".Contenedor-Registro");
    if (!container) return;

    const inputs = container.querySelectorAll('input[type="password"]');
    const password = inputs[0];
    const confirmPassword = inputs[1];
    const condiciones = container.querySelector(".condiciones");
    const items = condiciones ? condiciones.querySelectorAll("p") : [];
    const boton = container.querySelector(".boton-continuar");

    function validar(){
        const val = password.value;
        
        const reglas = [
            {ok: val.length >= 8, texto: "Mínimo 8 caracteres"},
            {ok: /[A-Z]/.test(val), texto: "Al menos una mayúscula"},
            {ok: /[a-z]/.test(val), texto: "Al menos una minúscula"},
            {ok: /[0-9]/.test(val), texto: "Al menos un número"},
            {ok: /[¨!@#$%^&*(),.?\":{}|<>]/.test(val), texto: "Al menos un carácter especial"},
        ];

        reglas.forEach((regla, i) => {
            if (!items[i]) return;
            const icono = regla.ok ? "✓" : "✕";
            const color = regla.ok ? "green" : "red";
            items[i].innerHTML = `<span style="color:${color}; font-weight:bold;">${icono}</span> ${regla.texto}`;
        });

        let coincide = true;
        if (confirmPassword){
            coincide = val === confirmPassword.value && val.length > 0;
            const icono = coincide ? "✓" : "✕";
            const color = coincide ? "green" : "red";

            if (!condiciones.querySelector(".match")){
                const p = document.createElement("p");
                p.classList.add("match");
                condiciones.appendChild(p);
            }

            const matchP = condiciones.querySelector(".match");
            matchP.innerHTML = `<span style="color:${color}; font-weight:bold;">${icono}</span> ${coincide ? "Las contraseñas coinciden" : "Las contraseñas no coinciden"}`;
        }

        const todasOk = reglas.every(r => r.ok) && coincide;
        boton.disabled = !todasOk;
        boton.style.opacity = todasOk ? "1" : "0.6";
    }

    password.addEventListener("input", validar);
    if (confirmPassword) confirmPassword.addEventListener("input", validar);

    validar();


    const inputCorreo = document.querySelector('input[type="email"]');

    boton.addEventListener("click", () => {
        const correo = inputCorreo.value.trim();

        if(correo){
            localStorage.setItem("correoUsuario", correo);
            window.location.href="../../HTML/Visitante/verificacionCorreo.html";
        }
        else{
            alert("Por favor ingresa un correo valido");
        }
        
    });
});