document.addEventListener('DOMContentLoaded', function() {
   
    const form = document.getElementById('passwordForm');
    const contraseña = document.getElementById('password1');
    const confirmarContraseña = document.getElementById('password2');
    const alertSuccess = document.getElementById('alert-success');
    const alertDanger = document.getElementById('alert-danger');

    
    function showAlertSuccess() {
        alertSuccess.classList.add('show');
        alertDanger.classList.remove('show');
    }

    function showAlertError() {
        alertDanger.classList.add('show');
        alertSuccess.classList.remove('show');
    }

    
    form.addEventListener('submit', function(event) {
        
        if (contraseña.value === confirmarContraseña.value) {
            showAlertSuccess();
        } else {
            showAlertError();
            event.preventDefault(); 
        }
    });
});
