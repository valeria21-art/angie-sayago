// Obtener el elemento del fondo
const fondo = document.getElementById('fondo1');

// Variables de color y valor inicial
let r = 255;
let g = 0;
let b = 0;

// Función de animación
function animarFondo() {
  // Cambiar los valores de color gradualmente
  r--;
  g++;
  b++;

  // Aplicar el nuevo color de fondo
  fondo.style.background-color;

  // Verificar si se alcanzó el final de la animación
  if (r > 0 || g < 255 || b < 255) {
    // Solicitud de próxima animación
    requestAnimationFrame(animarFondo);
  }
}

// Iniciar la animación
requestAnimationFrame(animarFondo);
