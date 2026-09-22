/* destacados */

// Animación de entrada del Hero
window.addEventListener('load', function() {
  setTimeout(function() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.classList.add('visible');
    }
  }, 200);
});

// Scroll suave a productos
function scrollToProductos() {
  const section = document.getElementById('productos-section');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Asignar a todos los botones
document.querySelectorAll('.btn-danger, .btn-outline-light, .btn-dark').forEach(btn => {
  btn.addEventListener('click', scrollToProductos);
});