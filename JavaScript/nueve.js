const prompt = require('prompt-sync')();

function password(cadena) {
    const clave = "rebeca";
    let intentos = 3;

    while (intentos > 0) {
        let intento = prompt("Introduce la contraseña: ");
        if (intento === clave) {
            console.log("Contraseña correcta.");
            return;
        } else {
            console.log("Intento de nuevo.");
            intentos--;
        }
    }

    console.log("Acceso denegado.");
}

password();
