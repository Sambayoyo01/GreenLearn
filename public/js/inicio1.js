document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const fondo1 = document.getElementById("fondo1");

  const expcursos = document.getElementById("expcursos"); // este es tu botón real
  const feature = document.getElementById("feature");     // calculadora

  if (expcursos) {
    expcursos.addEventListener("click", () => {
      console.log("Click en Explorar Cursos detectado");
      loader.style.display = "block";
      fondo1.style.display = "block";
      setTimeout(() => {
        window.location.href = "cursos.html";
      }, 400);
    });
  }

  if (feature) {
    feature.addEventListener("click", () => {
      console.log("Click en Calculadora detectado");
      loader.style.display = "block";
      fondo1.style.display = "block";
      setTimeout(() => {
        window.location.href = "calculadora.html";
      }, 400);
    });
  }

  // Al volver con botón "Atrás"
  window.addEventListener("pageshow", () => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("fondo1").style.display = "none";
    document.getElementById("fondo").style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const fondo1 = document.getElementById("fondo1");

  const expcursos = document.getElementById("expcursos"); // este es tu botón real
  const feature = document.getElementById("feature");     // calculadora

  if (expcursos) {
    expcursos.addEventListener("click", () => {
      console.log("Click en Explorar Cursos detectado");
      loader.style.display = "block";
      fondo1.style.display = "block";
      setTimeout(() => {
        window.location.href = "cursos.html";
      }, 400);
    });
  }

  if (feature) {
    feature.addEventListener("click", () => {
      console.log("Click en Calculadora detectado");
      loader.style.display = "block";
      fondo1.style.display = "block";
      setTimeout(() => {
        window.location.href = "calculadora.html";
      }, 400);
    });
  }

  // Al volver con botón "Atrás"
  window.addEventListener("pageshow", () => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("fondo1").style.display = "none";
    document.getElementById("fondo").style.display = "none";
  });
});

  

    window.addEventListener("pageshow", function() {
        // Siempre ocultar el loader y el fondo al volver con el botón "Atrás"
        document.getElementById("loader").style.display = "none";
        document.getElementById("fondo1").style.display = "none";
        document.getElementById("fondo").style.display = "none";
    
});

