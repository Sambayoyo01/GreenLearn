
// declaracion de variables
var boton3 = document.getElementById("boton3");
var boton4 = document.getElementById("boton4");

var cerrar = document.getElementById("cerrar");
var cerrar2 = document.getElementById("cerrar2");

// Interacciones Formulario registro

// Declaración de variable de formulario Rol
var btnRegistroNav = document.getElementById("btnRegistroNav");
var btnRegistroMain = document.getElementById("btnRegistroMain");

// Aparición de formulario
btnRegistroNav.onclick = function(event) {
event.preventDefault(); 
formRol.style.display = "block"; 
fondoRegister.style.display = "block"; 
}
btnRegistroMain.onclick = function(event) {
event.preventDefault(); 
formRol.style.display = "block"; 
fondoRegister.style.display = "block"; 
}

// Declaración de variable de formulario Registro
const btnRolEstudent = document.getElementById("btnRolEstudent");
const btnRolTeacher = document.getElementById("btnRolTeacher");
const rolHidden = document.getElementById("rolHidden");

// Aparición de formulario de resgistro
btnRolEstudent.onclick = function(event) {
    event.preventDefault();
    rolHidden.value = "estudiante"; // Guardar rol 
    formulario_g.style.display = "block"; 
    fondoRegister.style.display = "block";
    formRol.style.display = "none"; 
}
btnRolTeacher.onclick = function(event) {
    event.preventDefault(); 
    rolHidden.value = "profesor"; // Guardar rol
    formulario_g.style.display = "block"; 
    fondoRegister.style.display = "block";
    formRol.style.display = "none";
}
// Ocultar formulario de Registro
cerrar.onclick = function(event) {
    event.preventDefault();
    formulario_g.style.display = "none"; 
    fondoRegister.style.display = "none"; 
}

// Interacciones Formulario Inicio

// Declaración de variables
const btnInicio = document.getElementById("btnInicio");

// Aparición de formulario
btnInicio.onclick = function(event) {
    event.preventDefault(); 
    formulario_i.style.display = "block"; 
    fondoRegister.style.display = "block"; 
}

// Ocultar formulario
cerrar2.onclick = function(event) {
    event.preventDefault(); 
    formulario_i.style.display = "none"; 
    fondoRegister.style.display = "none"; 
}

//mostrar registro cerra formulario inicio de sesion 
boton3.onclick = function(event) {
    event.preventDefault(); 
    formulario_i.style.display = "none";
    formulario_g.style.display = "block"; 
    fondoRegister.style.display = "block"; 
}

//mostrar formulario de inicio de sesion y cerrar registro 

boton4.onclick = function(event) {
    event.preventDefault(); 
    formulario_g.style.display = "none";
    formulario_i.style.display = "block"; 
    fondoRegister.style.display = "block"; 
}

// Ejecutar loader
window.onload = function() {
    const inicio = document.getElementById("inicio");
    const loader = document.getElementById("loader");
    const fondoLoader = document.getElementById("fondoLoader");
    const registrarme = document.getElementById("registrarme");
    const formRegister = document.getElementById("formRegister");

    // boton inicio 
    inicio.onclick = function(){
        formulario_i.style.display = "none";
        loader.style.display = "block";
        fondoRegister.style.display = "none";
        fondoLoader.style.display = "block"; 
        setTimeout(() => {
            window.location.href = "inicio.html"; 
        }, 1000);
    }

    registrarme.onclick = function (event) {
    event.preventDefault(); // Evita que envíe por defecto

    // Verificar si el formulario es válido
    if (formRegister.checkValidity()) {
        // Si es válido, ocultar y mostrar loader
        formulario_g.style.display = "none";
        loader.style.display = "block";
        fondoLoader.style.display = "block";

        setTimeout(() => {
            window.location.href = "inicio.html";
        }, 1000);
    } else {
        // Si no es válido, forzar que el navegador muestre el mensaje de error
        formulario_g.reportValidity();
    }
};
}

window.addEventListener("pageshow", function() {
    // Siempre ocultar el loader y el fondo al volver con el botón "Atrás"
    document.getElementById("loader").style.display = "none";
    document.getElementById("fondoLoader").style.display = "none";
    document.getElementById("fondoRegister").style.display = "none";

});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const errorDiv = document.getElementById("loginError");

    fetch("../auth/login.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            window.location.href = "inicio.html"; 
        } else {
            errorDiv.textContent = data.message;
        }
    })
    .catch(() => {
        errorDiv.textContent = "Ocurrió un error, intenta más tarde.";
    });
});




