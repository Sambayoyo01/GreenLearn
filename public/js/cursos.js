const cursos = [
  {
    titulo: "Consumo Responsable",
    descripcion: "Aprende a tomar decisiones que reduzcan tu huella ecológica.",
    nivel: "Básico",
    archivo: "curso.html"
  },
  {
    titulo: "Energía y Sustentabilidad",
    descripcion: "Explora cómo funciona la energía limpia y su impacto positivo.",
    nivel: "Intermedio",
    archivo: "curso.html"
  },
  {
    titulo: "Reciclaje Efectivo",
    descripcion: "Conoce buenas prácticas para separar y reducir residuos.",
    nivel: "Básico",
    archivo: "curso.html"
  },
  {
    titulo: "Agua: Uso y Conservación",
    descripcion: "Descubre cómo ahorrar y cuidar el recurso más valioso.",
    nivel: "Avanzado",
    archivo: "curso.html"
  }
];

const contenedor = document.getElementById("lista-cursos");

cursos.forEach(curso => {
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta-curso";
  tarjeta.innerHTML = `
    <h3>${curso.titulo}</h3>
    <p>${curso.descripcion}</p>
    <p class="nivel">Nivel: ${curso.nivel}</p>
    <button class="boton-iniciar" onclick="location.href='${curso.archivo}'">Iniciar Curso</button>
  `;
  contenedor.appendChild(tarjeta);
});
