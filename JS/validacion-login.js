// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir envío del formulario

        // Limpiar mensaje de error previo
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';

        // Obtener valores de los campos
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        // Validaciones
        if (username === '') {
            mostrarError('El nombre de usuario es obligatorio.');
            return;
        }

        if (username.length < 3) {
            mostrarError('El nombre de usuario debe tener al menos 3 caracteres.');
            return;
        }

        if (password === '') {
            mostrarError('La contraseña es obligatoria.');
            return;
        }

        if (password.length < 6) {
            mostrarError('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        // Si todas las validaciones pasan
        mostrarExito('Inicio de sesión exitoso!');

        // Aquí podrías hacer una petición AJAX para verificar credenciales
        // O redirigir al usuario a otra página
        // window.location.href = 'index.html';
    });

    function mostrarError(mensaje) {
        errorMessage.textContent = mensaje;
        errorMessage.style.display = 'block';
        errorMessage.className = 'error-message';
    }

    function mostrarExito(mensaje) {
        errorMessage.textContent = mensaje;
        errorMessage.style.display = 'block';
        errorMessage.className = 'success-message';

        // Opcional: Redirigir después de un login exitoso
        setTimeout(() => {
            // window.location.href = 'index.html';
        }, 2000);
    }
});
