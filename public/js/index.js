
        // declaracion de variables
        var boton1 = document.getElementById("boton1");
        var boton2 = document.getElementById("boton2");
        var boton3 = document.getElementById("boton3");
        var boton4 = document.getElementById("boton4");
        var formulario_g = document.getElementById("formulario_g");
        var fondo = document.getElementById("fondo");
        var cerrar = document.getElementById("cerrar");
        var cerrar2 = document.getElementById("cerrar2");

        // Al hacer clic en el botón "Comenzar Gratis"
        boton1.onclick = function(event) {
            event.preventDefault(); 
            formulario_g.style.display = "block"; 
            fondo.style.display = "block"; 
        }

        // Al hacer clic en el botón "Cerrar"
        cerrar.onclick = function(event) {
            event.preventDefault(); 
            formulario_g.style.display = "none"; 
            fondo.style.display = "none"; 
        }
// Al hacer clic en el botón "Iniciar Sesion"
        boton2.onclick = function(event) {
            event.preventDefault(); 
            formulario_i.style.display = "block"; 
            fondo.style.display = "block"; 
        }
        //cerrar formulario inicio de sesion

        cerrar2.onclick = function(event) {
            event.preventDefault(); 
            formulario_i.style.display = "none"; 
            fondo.style.display = "none"; 
        }

        //mostrar registro cerra formulario inicio de sesion 
        boton3.onclick = function(event) {
            event.preventDefault(); 
            formulario_i.style.display = "none";
            formulario_g.style.display = "block"; 
            fondo.style.display = "block"; 
        }

        //mostrar formulario de inicio de sesion y cerrar registro 

        boton4.onclick = function(event) {
            event.preventDefault(); 
            formulario_g.style.display = "none";
            formulario_i.style.display = "block"; 
            fondo.style.display = "block"; 
        }

        //ejecutar loader
        window.onload = function() {
    var inicio = document.getElementById("inicio");
    var loader = document.getElementById("loader");
    var fondo1 = document.getElementById("fondo1");
    var registrarme = document.getElementById("registrarme");

    // boton inicio 
    inicio.onclick = function(event) {
        event.preventDefault(); 
        formulario_i.style.display = "none";
        loader.style.display = "block";
        fondo.style.display = "none";
        fondo1.style.display = "block"; 
        setTimeout(() => {
            window.location.href = "inicio.html"; 
        }, 1000);
    }

    // boton registrarme
    registrarme.onclick = function(event) {
        event.preventDefault(); 
        formulario_g.style.display = "none"
        loader.style.display = "block";
        fondo1.style.display = "block"; 
        setTimeout(() => {
            window.location.href = "inicio.html"; 
        }, 400);
    }
}


window.addEventListener("pageshow", function() {
    // Siempre ocultar el loader y el fondo al volver con el botón "Atrás"
    document.getElementById("loader").style.display = "none";
    document.getElementById("fondo1").style.display = "none";
    document.getElementById("fondo").style.display = "none";

});



