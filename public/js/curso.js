const lecciones = [
  {
    titulo: "Lección 1: ¿Qué es el consumo responsable?",
    contenido: "El consumo responsable significa elegir productos y servicios teniendo en cuenta su impacto ambiental y social."
  },
  {
    titulo: "Lección 2: ¿Cómo afecta tu compra al planeta?",
    contenido: "Cada compra que haces influye en el uso de recursos naturales, energía, transporte y residuos generados."
  },
  {
    titulo: "Lección 3: Prácticas sostenibles en tu día a día",
    contenido: "Usa bolsas reutilizables, compra productos locales, evita plásticos de un solo uso y apoya marcas ecológicas."
  }
];

let leccionActual = parseInt(localStorage.getItem("leccionActual")) || 0;

function mostrarLeccion(index) {
  document.getElementById("titulo-leccion").textContent = lecciones[index].titulo;
  document.getElementById("contenido-leccion").textContent = lecciones[index].contenido;
  document.getElementById("contador-leccion").textContent = `Lección ${index + 1} de ${lecciones.length}`;
  document.getElementById("barra-progreso").value = index + 1;
  localStorage.setItem("leccionActual", index);
}

function siguienteLeccion() {
  if (leccionActual < lecciones.length - 1) {
    leccionActual++;
    mostrarLeccion(leccionActual);
  }
}

function anteriorLeccion() {
  if (leccionActual > 0) {
    leccionActual--;
    mostrarLeccion(leccionActual);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarLeccion(leccionActual);
});
