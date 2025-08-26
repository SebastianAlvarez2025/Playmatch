document.getElementById("loginForm").addEventListener("submit", function(event){
  event.preventDefault(); // Evita que recargue la página

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if(email === "admin@torneo.com" && password === "1234"){
    alert("Bienvenido al sistema de torneos ⚽");
    // Aquí luego puedes redirigir a otra página de dashboard
    // window.location.href = "dashboard.html";
  } else {
    alert("Credenciales incorrectas ❌");
  }
});
