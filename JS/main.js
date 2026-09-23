/* ==========================================================================
   LÓGICA DEL MENÚ DE NAVEGACIÓN (Alberto)
   Responsabilidad: Despliegue responsivo del menú y cambio de ícono
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const toggleIcon = document.getElementById('toggle-icon');

  if (navToggle && navMenu) {
    // Abrir o cerrar menú al tocar el botón hamburguesa
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');

      // Cambiar entre el ícono de barras (hamburguesa) y la X
      if (toggleIcon) {
        toggleIcon.classList.toggle('fa-bars');
        toggleIcon.classList.toggle('fa-xmark');
      }
    });

    // Cerrar el menú automáticamente al tocar cualquier enlace de navegación
    const enlaces = navMenu.querySelectorAll('.nav-link');
    enlaces.forEach(enlace => {
      enlace.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (toggleIcon) {
          toggleIcon.classList.add('fa-bars');
          toggleIcon.classList.remove('fa-xmark');
        }
      });
    });

    // Cerrar el menú si el usuario hace clic afuera de la barra
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        if (toggleIcon) {
          toggleIcon.classList.add('fa-bars');
          toggleIcon.classList.remove('fa-xmark');
        }
      }
    });
  }
});