document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que la página se recargue

  // Capturar los valores
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  const mensajeError = document.getElementById('mensaje-error');

  // Validar campos vacíos
  if (nombre === '' || correo === '' || mensaje === '') {
    mensajeError.style.color = 'red';
    mensajeError.textContent = 'Por favor, llena todos los campos.';
  } else {
    mensajeError.style.color = 'green';
    mensajeError.textContent = '¡Gracias! Mensaje enviado con éxito.';

    // Limpiar el formulario
    document.getElementById('formulario-contacto').reset();
  }
});