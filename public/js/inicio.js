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