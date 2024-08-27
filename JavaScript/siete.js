const prompt = require('prompt-sync')();
let numeros = []; 

function obtenerMayor(arreglo) {
  if (arreglo.length === 0) {
    return "El array está vacío.";
  }

  let mayor = arreglo[0]; 

  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
      mayor = arreglo[i];
    }
  }

  return mayor;
}
function obtenerMenor(arreglo) {
    if (arreglo.length === 0) {
      return "El array está vacío.";
    }
  
    let menor = arreglo[0]; 
  
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] !== 0 && arreglo[i] < menor) {
          menor = arreglo[i];
        }
      }
  
    return menor;
  }
  function obtenerSuma(arreglo) {
    if (arreglo.length === 0) {
        return "El arreglo está vacío.";
    }

    let suma = 0;

    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }

    return suma;
}

function obtenerMedia(arreglo) {
    if (arreglo.length === 0) {
        return "El arreglo está vacío.";
    }

    let suma = 0;

    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }

    let media = suma / arreglo.length;

    return media;
}


function obtenerNumeros() {
  let input;
  do {
    input = prompt("Dame un número (ingresa 0 para finalizar):");
    numeros.push(parseFloat(input)); 
  } while (input !== "0"); 
}

obtenerNumeros();
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

console.log("El mayor elemento es:", obtenerMayor(numeros));
console.log("El menor elemento es:",obtenerMenor(numeros)); 
console.log("La suma elemento es:",obtenerSuma(numeros));
console.log("La media aritmetica es:",obtenerMedia(numeros)); 
