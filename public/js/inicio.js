window.onload = function() {
  const fondoLoader = document.getElementById("fondoLoader");
  const loader = document.getElementById("loader");

  // Send to Calculator Page
  const btnStartCalculation = document.getElementById("startCalculation");

  btnStartCalculation.onclick = function() {
    fondoLoader.style.display = "block";
    loader.style.display = "block";
    requestAnimationFrame(() => { // Fuerza a esperar la carga del loader
      setTimeout(() => {
        window.location.href = "calculadora.html";
      }, 1000);
    }, 50);
  };
};

const profileMenu = document.getElementById("profileMenu");
const btMenu = document.getElementById("btnMenu");

btnMenu.onclick = function(event) {
  event.preventDefault();
  profileMenu.classList.toggle("active");
};

// Cerrar el menú al hacer clic fuera
document.addEventListener("click", function(event) {
  // Si el menú está abierto y el clic NO es en el menú ni en el botón
  if (
    profileMenu.classList.contains("active") &&
    !profileMenu.contains(event.target) &&
    event.target !== btnMenu
  ) {
    profileMenu.classList.remove("active");
  }
});

  
  

