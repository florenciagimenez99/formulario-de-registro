document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón de registro y los campos de entrada
    const regBtn = document.getElementById('regBtn');
    const contraseña = document.getElementById('password1');
    const confirmarContraseña = document.getElementById('password2');
    const alertSuccess = document.getElementById('alert-success');
    const alertDanger = document.getElementById('alert-danger');

    // Funciones para mostrar alertas
    function showAlertSuccess() {
        alertSuccess.classList.add('show');
        alertDanger.classList.remove('show');
    }

    function showAlertError() {
        alertDanger.classList.add('show');
        alertSuccess.classList.remove('show');
    }

    // Manejador del evento click en el botón de registro
    regBtn.addEventListener('click', function() {
        // Comparar los valores de los campos de contraseña
        if (contraseña.value === confirmarContraseña.value) {
            showAlertSuccess();
            // Aquí puedes agregar el código para manejar el registro, como una llamada a un servidor.
        } else {
            showAlertError();
        }
    });
});
