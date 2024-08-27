const prompt = require('prompt-sync')();

let num = prompt("Dame un número rey: ");
num = parseInt(num); 

function factorial(num) {
  let resultado = 1; 

 
  for (let i = 1; i <= num; i++) {
    resultado *= i;
  }

  return resultado;
}

console.log("El factorial de", num, "es:", factorial(num));
