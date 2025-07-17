const objetos = document.querySelectorAll(".objeto");
const contenedores = document.querySelectorAll(".contenedor");
const resultado = document.getElementById("resultado");
let aciertos = 0;

objetos.forEach(objeto => {
  objeto.addEventListener("dragstart", e => {
    e.dataTransfer.setData("tipo", objeto.dataset.tipo);
    e.dataTransfer.setData("elementoId", objeto.innerText);
  });
});

contenedores.forEach(contenedor => {
  contenedor.addEventListener("dragover", e => {
    e.preventDefault();
  });

  contenedor.addEventListener("drop", e => {
    e.preventDefault();
    const tipoObjeto = e.dataTransfer.getData("tipo");
    const idObjeto = e.dataTransfer.getData("elementoId");
    const tipoContenedor = contenedor.dataset.tipo;

    if (tipoContenedor === tipoObjeto) {
      aciertos++;
      resultado.innerText = "✅ ¡Correcto!";
      // Eliminar el objeto del juego
      const objetosRestantes = Array.from(objetos).filter(obj => obj.innerText === idObjeto);
      if (objetosRestantes[0]) objetosRestantes[0].remove();
    } else {
      resultado.innerText = "❌ Intenta de nuevo";
    }

    if (aciertos === 3) {
      resultado.innerText = "🎉 ¡Felicidades! Separaste todos los residuos correctamente.";
    }
  });
});
