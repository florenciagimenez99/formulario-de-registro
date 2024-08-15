function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById('regBtn').addEventListener('click', function() { 
    let terminos = document.getElementById('terminos').checked;
    
    if (!terminos) {
        document.getElementById('alert-danger').classList.add('show');
        document.getElementById('alert-success').classList.remove('show');
        } else {
        document.getElementById('alert-danger').classList.remove('show'); 
        document.getElementById('alert-success').classList.add('show');
    } 
 });