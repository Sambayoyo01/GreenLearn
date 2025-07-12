var hero = document.getElementById("hero");
var boton1 = document.getElementById("boton1");
var section1 = document.getElementById("section1");

boton1.onclick = function(event) {
    event.preventDefault(); 
    hero.style.display = "none";
    section1.style.display = "block";
}