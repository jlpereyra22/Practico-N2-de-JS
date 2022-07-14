let suma = 0;
do {
  let numero = parseInt(prompt("Introduce un numero"));
  if (numero = Number(numero)) {
    suma = suma + numero;
  } else if (numero != Number(numero)) {
    alert("El valor ingresado NO es un numero");
  }
} while (confirm("¿Desea seguir escribiendo numeros?"));
document.write(suma);