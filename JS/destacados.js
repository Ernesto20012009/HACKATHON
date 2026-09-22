/* ====== SECCIÓN DESTACADOS - Mario ====== */

// Animación de entrada del Hero
window.addEventListener('load', function() {
  setTimeout(function() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.classList.add('visible');
    }
  }, 200);
});

// Scroll suave a la sección de Productos
function irAProductos() {
  const seccionProductos = document.getElementById('productos');
  if (seccionProductos) {
    seccionProductos.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Conectar TODOS los botones a Productos
document.querySelectorAll('.btn-danger, .btn-outline-light, .btn-dark').forEach(boton => {
  boton.addEventListener('click', irAProductos);
});

// Corregir enlace "Destacados" de la barra de navegación
document.querySelector('a.nav-link[href="#destacados"]').addEventListener('click', function(e) {
  e.preventDefault();
  const destacados = document.getElementById('destacados-section');
  if (destacados) {
    destacados.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});