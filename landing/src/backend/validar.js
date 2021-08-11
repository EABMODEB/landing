var nombre, correo, genero, recBol, comentario, carrera, pass, promedio, fecNac;

var regOficial = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
var formulario = document.getElementById('Form');

function enviar() {

    var datos = new FormData(formulario);

    nombre = datos.get('name');
    telefono = datos.get('phone');
    correo = datos.get('mail');
    comentario = datos.get('comentario');

    if(nombre == "" || nombre == '' || telefono == ""){
        alert("Faltan campos por llenar.");
        return false;
    }
    else if(!regOficial.test(correo)) {
        alert("Correo incorrecto, intente de nuevo.");
        return false;
    }
    else {
        return true;
    }
  }