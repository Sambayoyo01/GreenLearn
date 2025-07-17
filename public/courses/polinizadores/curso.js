function mostrarPantalla(num) {
  // Ocultar todas las pantallas
  document.querySelectorAll(".pantalla").forEach(p => p.classList.add("oculto"));

  // Ocultar pantalla de inicio también
  document.getElementById("pantalla-inicio").style.display = "none";

  // Mostrar pantalla correspondiente
  document.getElementById("pantalla-" + num).classList.remove("oculto");
}

function evaluar(respuesta) {
  const mensaje = (respuesta === "murcielago") ?
    "✅ ¡Correcto! También es polinizador." :
    "❌ Incorrecto. El águila no es polinizadora.";
  document.getElementById("respuesta").innerText = mensaje;
}
