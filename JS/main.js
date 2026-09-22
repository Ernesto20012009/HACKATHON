document.addEventListener('DOMContentLoaded', () => {
  // Selección de elementos del DOM
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const toggleIcon = document.getElementById('toggle-icon');
  const navLinks = document.querySelectorAll('.nav-link');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    //Cambiar entre íconos menú hamburguesa y tache para cerrarlo
    if (navMenu.classList.contains('active')) {
      toggleIcon.classList.remove('fa-bars');
      toggleIcon.classList.add('fa-xmark');
    } else {
      toggleIcon.classList.remove('fa-xmark');
      toggleIcon.classList.add('fa-bars');
    }
  });

  //Cerrar el menú anvorgesa al hacer clic en cualquier enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      toggleIcon.classList.remove('fa-xmark');
      toggleIcon.classList.add('fa-bars');
    });
  });
});
