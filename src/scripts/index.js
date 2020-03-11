var i = 0;
var txt = 'Vuela. Disfruta. Vive.'; // Texto que se escribirá en pantalla.
var speed = 80; // Velocidad en milisegundos.

/** Realiza un efecto de auto escritura en pantalla, 
 * va colocado por encima del vídeo del index.
 * 
 */
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("autoH1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

/** Efecto hamburguer con la media querie.
 * 
*/
const hamburguer = document.querySelector(".hamburguer");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
hamburguer.addEventListener('click', () => {
  navLinks.classList.toggle('apertura');
});