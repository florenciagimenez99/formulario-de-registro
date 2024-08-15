document.addEventListener('DOMContentLoaded', function() {


    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let email = document.getElementById('email');
    let terminos = document.getElementById('terminos');
    let contraseña = document.getElementById('password1');
    let confirmarContraseña = document.getElementById('password2');
    let alertSuccess = document.getElementById('alert-success');
    let alertDanger = document.getElementById('alert-danger');
    let submitButton = document.getElementById('regBtn');

    function showAlertSuccess() {
        alertSuccess.classList.add('show');
        alertDanger.classList.remove('show');
    }

    function showAlertError() {
        alertDanger.classList.add('show');
        alertSuccess.classList.remove('show');
    }

    submitButton.addEventListener('click', function() {
        if (nombre.value 
            && apellido.value
             && email.value && 
             contraseña.value === confirmarContraseña.value
             && contraseña.value >= 6
              && terminos.checked) {
            showAlertSuccess();
        } else {
            showAlertError();
        }
    });
});