document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registro-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();  

        // Limpiar mensaje de error
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';

        // Obtener valores de los campos
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validaciones
        if (username === '') {
            mostrarError('El nombre de usuario es obligatorio.');
            return;
        }

        if (username.length < 3) {
            mostrarError('El nombre de usuario debe tener al menos 3 caracteres.');
            return;
        }

        if (email === '') {
            mostrarError('El correo electrónico es obligatorio.');
            return;
        }

        if (!validarEmail(email)) {
            mostrarError('Por favor, ingresa un correo electrónico válido.');
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

        if (confirmPassword === '') {
            mostrarError('Debes confirmar tu contraseña.');
            return;
        }

        if (password !== confirmPassword) {
            mostrarError('Las contraseñas no coinciden.');
            return;
        }

        // Si todas esta ok, se registrara
        mostrarExito('Registro exitoso!');
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
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
