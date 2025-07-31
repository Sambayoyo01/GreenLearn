document.addEventListener("DOMContentLoaded", function () {
    var boton1 = document.getElementById("boton1");
    var hero = document.getElementById("hero");
    var section1 = document.getElementById("section1");

    boton1.onclick = function(event) {
        event.preventDefault();
        hero.style.display = "none";
        section1.style.display = "block";
    };
});

// navegador entre formularios de calculadoras
document.addEventListener("DOMContentLoaded", () => {
  const botones = {
    carbonCalculatorBtn: "carbonCalculator",
    energyCalculatorBtn: "energyCalculator",
    waterCalculatorBtn: "waterCalculator",
    wasteCalculatorBtn: "wasteCalculator"
  };

  const formularios = Object.values(botones);

  // Oculta todos los formularios
  function ocultarTodosLosFormularios() {
    formularios.forEach(id => {
      const formulario = document.getElementById(id);
      if (formulario) {
        formulario.style.display = "none";
      }
    });
  }

  // Mostrar el formulario seleccionado
  function mostrarFormulario(idFormulario) {
    ocultarTodosLosFormularios();
    const formulario = document.getElementById(idFormulario);
    if (formulario) {
      formulario.style.display = "block";
    }
  }

  // Asignar eventos a los botones
  Object.entries(botones).forEach(([btnId, formId]) => {
    const boton = document.getElementById(btnId);
    if (boton) {
      boton.addEventListener("click", () => {
        mostrarFormulario(formId);
      });
    }
  });

  // Mostrar uno por defecto al cargar la página (opcional)
  mostrarFormulario("carbonCalculator");
});

document.addEventListener("DOMContentLoaded", () => {
  // Elementos del formulario de huella de carbono
  const carbonCalculator = document.getElementById("carbonCalculator");
  const inputs = carbonCalculator.querySelectorAll("input");
  const calcBtn = carbonCalculator.querySelector(".sendBtn");
  const resetBtn = carbonCalculator.querySelector(".resetBtn");

  // Panel de resultado
  const resultadoPanel = {
    valor: document.getElementById("scoreValue"),
    estado: document.getElementById("scoreStatus"),
    recomendaciones: document.getElementById("recommendationList")
  };

  // Función para mostrar el resultado en el panel
  function mostrarResultado(valor, estado, recomendaciones) {
    resultadoPanel.valor.textContent = `${valor.toFixed(2)} kg CO₂e/persona`;
    resultadoPanel.estado.textContent = estado;
    resultadoPanel.recomendaciones.innerHTML = "";
    recomendaciones.forEach(texto => {
      const li = document.createElement("li");
      li.textContent = texto;
      resultadoPanel.recomendaciones.appendChild(li);
    });
  }

  // Función de cálculo para huella de carbono
  calcBtn.addEventListener("click", () => {
    const kmAuto = parseFloat(inputs[0].value) || 0;
    const vuelos = parseFloat(inputs[1].value) || 0;
    const electricidad = parseFloat(inputs[2].value) || 0;
    const personas = parseFloat(inputs[3].value) || 1;

    const emisionesAuto = kmAuto * 0.2;          // kg CO₂e por km
    const emisionesVuelos = vuelos * 250 / 12;   // Vuelos anuales convertidos a mensual
    const emisionesElectricidad = electricidad * 0.4; // kg CO₂e por kWh

    const totalMensual = (emisionesAuto + emisionesVuelos + emisionesElectricidad) / personas;

    // Clasificación
    let estado = "";
    let recomendaciones = [];

    if (totalMensual < 100) {
      estado = "Bajo";
      recomendaciones.push("¡Buen trabajo! Tu huella es baja.");
    } else if (totalMensual < 300) {
      estado = "Moderado";
      recomendaciones.push("Considera reducir tus viajes en auto y optimizar tu consumo eléctrico.");
    } else {
      estado = "Alto";
      recomendaciones.push("Reduce el uso del automóvil.");
      recomendaciones.push("Busca alternativas energéticas sostenibles.");
      recomendaciones.push("Revisa la eficiencia energética de tus electrodomésticos.");
    }

    mostrarResultado(totalMensual, estado, recomendaciones);
  });

  // Botón de limpiar
  resetBtn.addEventListener("click", () => {
    inputs.forEach(input => input.value = "");
    mostrarResultado(0, "--", []);
  });
});

// 🟡 CONSUMO DE ENERGÍA
document.addEventListener('DOMContentLoaded', () => {
  const energyForm = document.getElementById('energyCalculator');
  const energyInputs = energyForm.querySelectorAll('input');
  const energySelect = energyForm.querySelector('select');
  const resultPanel = document.getElementById('resultadoPanel');

  const energyFactors = {
    solar: 0.05,
    electricidad: 0.4,
    gas: 0.2
  };

  // Calcular impacto energético
  energyForm.querySelector('.sendBtn').addEventListener('click', () => {
    const consumo = parseFloat(energyInputs[0].value) || 0;
    const tipo = energySelect.value;

    if (!energyFactors[tipo]) {
      alert('⚠️ Selecciona un tipo de energía válido.');
      return;
    }

    const impacto = consumo * energyFactors[tipo]; // kg CO₂e

    // Puntuación ambiental inversa al impacto
    const score = Math.max(0, 100 - impacto / 10); // Ajuste proporcional
    let status = '';
    if (score >= 80) status = 'Excelente';
    else if (score >= 50) status = 'Aceptable';
    else status = 'Mejorable';

    // Recomendaciones según tipo
    let recomendaciones = [];
    if (tipo === 'electricidad') recomendaciones.push('Cambia a fuentes renovables como solar o eólica');
    if (tipo === 'gas') recomendaciones.push('Reduce el uso de gas calentando solo lo necesario');
    if (tipo === 'solar') recomendaciones.push('Sigue aprovechando energía limpia 🌞');

    // Mostrar resultado en el panel
    resultPanel.innerHTML = `
      <div class="resultBox">
        <h3>Resultados</h3>
        <h1>${score.toFixed(0)}/100</h1>
        <p class="scoreLabel">Puntuación Ambiental</p>
        <p class="scoreStatus">${status}</p>
        <div class="recommendations">
          <h4>Recomendaciones:</h4>
          <ul>
            ${recomendaciones.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  });

  // Limpiar el formulario
  energyForm.querySelector('.resetBtn').addEventListener('click', () => {
    energyInputs[0].value = '';
    energySelect.selectedIndex = 0;
    resultPanel.innerHTML = ''; // Opcional: borrar resultado
  });
});

// 🔵 USO DE AGUA
document.addEventListener('DOMContentLoaded', () => {
  const waterForm = document.getElementById('waterCalculator');
  const waterInputs = waterForm.querySelectorAll('input');
  const resultPanel = document.getElementById('resultadoPanel');

  waterForm.querySelector('.sendBtn').addEventListener('click', () => {
    const duchasMin = parseFloat(waterInputs[0].value) || 0; // min/día
    const lavados = parseFloat(waterInputs[1].value) || 0;   // veces/semana

    // Cálculos: consumo mensual en litros
    const duchasMes = duchasMin * 30 * 9;         // 9 L/minuto x 30 días
    const lavadosMes = lavados * 4 * 70;          // 70 L por carga x 4 semanas
    const consumoTotal = duchasMes + lavadosMes;

    // Puntaje ambiental
    const score = Math.max(0, 100 - consumoTotal / 100); // Penalización gradual
    let status = '';
    if (score >= 80) status = 'Excelente';
    else if (score >= 50) status = 'Aceptable';
    else status = 'Mejorable';

    // Recomendaciones personalizadas
    const recomendaciones = [];

    if (duchasMin > 10) {
      recomendaciones.push('Reduce tus duchas a menos de 10 minutos.');
      recomendaciones.push('Instala un cabezal de ducha de bajo flujo.');
    } else {
      recomendaciones.push('Muy bien, mantienes duchas breves.');
    }

    if (lavados > 3) {
      recomendaciones.push('Acumula ropa para hacer cargas completas.');
      recomendaciones.push('Usa ciclos ecológicos de lavado en frío.');
    } else {
      recomendaciones.push('Buen hábito: haces un uso eficiente de la lavadora.');
    }

    if (consumoTotal > 10000) {
      recomendaciones.push('Considera recolectar agua lluvia para tareas como regar plantas o limpiar.');
    }

    recomendaciones.push('Cierra la llave mientras te cepillas los dientes o lavas platos.');
    recomendaciones.push('Revisa posibles fugas en grifos o tuberías.');

    // Mostrar resultados
    resultPanel.innerHTML = `
      <div class="resultBox">
        <h3>Resultados</h3>
        <h1>${score.toFixed(0)}/100</h1>
        <p class="scoreLabel">Puntuación Ambiental</p>
        <p class="scoreStatus">${status}</p>
        <div class="recommendations">
          <h4>Recomendaciones:</h4>
          <ul>
            ${recomendaciones.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  });

  // Botón Limpiar
  waterForm.querySelector('.resetBtn').addEventListener('click', () => {
    waterInputs[0].value = '';
    waterInputs[1].value = '';
    resultPanel.innerHTML = '';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const wasteForm = document.getElementById('wasteCalculator');
  const bolsasInput = wasteForm.querySelector('input');
  const reciclasSelect = wasteForm.querySelector('#recycleSelect');
  const resultPanel = document.getElementById('resultadoPanel');

  wasteForm.querySelector('.sendBtn').addEventListener('click', () => {
    const bolsas = parseFloat(bolsasInput.value) || 0;
    const reciclas = reciclasSelect.value;

    if (reciclas === "default") {
      resultPanel.innerHTML = `<p style="color: red;">Por favor, selecciona si reciclas.</p>`;
      return;
    }

    // Calcular impacto anual aproximado
    const bolsasAnuales = bolsas * 52;
    let impacto = bolsasAnuales;

    if (reciclas === "si") {
      impacto *= 0.6; // Reducción por reciclar
    }

    // Puntaje ambiental basado en generación total de residuos
    const score = Math.max(0, 100 - impacto / 10); // Penaliza más por más bolsas
    let status = '';
    if (score >= 80) status = 'Excelente';
    else if (score >= 50) status = 'Aceptable';
    else status = 'Mejorable';

    // Recomendaciones
    const recomendaciones = [];

    if (reciclas === "no") {
      recomendaciones.push("Empieza a separar residuos reciclables como papel, cartón, vidrio y plástico.");
      recomendaciones.push("Consulta si en tu ciudad hay puntos de reciclaje o recolección selectiva.");
    } else {
      recomendaciones.push("¡Buen trabajo reciclando! Asegúrate de lavar y separar correctamente los residuos.");
    }

    if (bolsas > 4) {
      recomendaciones.push("Reduce la generación de residuos evitando productos con empaques innecesarios.");
      recomendaciones.push("Compra a granel o reutiliza envases para disminuir el uso de plásticos.");
    } else {
      recomendaciones.push("Estás generando una cantidad razonable de residuos. ¡Sigue así!");
    }

    recomendaciones.push("Composta los residuos orgánicos para reducir hasta el 50% de tu basura.");
    recomendaciones.push("Reutiliza bolsas o recipientes para reducir desechos de un solo uso.");

    // Mostrar resultado en el panel derecho
    resultPanel.innerHTML = `
      <div class="resultBox">
        <h3>Resultados</h3>
        <h1>${score.toFixed(0)}/100</h1>
        <p class="scoreLabel">Puntuación Ambiental</p>
        <p class="scoreStatus">${status}</p>
        <div class="recommendations">
          <h4>Recomendaciones:</h4>
          <ul>
            ${recomendaciones.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  });

  // Botón Limpiar
  wasteForm.querySelector('.resetBtn').addEventListener('click', () => {
    bolsasInput.value = '';
    reciclasSelect.selectedIndex = 0;
    resultPanel.innerHTML = '';
  });
});


