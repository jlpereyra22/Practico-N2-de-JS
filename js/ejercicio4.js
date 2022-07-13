var suma = 0;

do {
  var numero = prompt("Introduce un numero");

  if (Number(numero) == numero) {
    numero = Number(numero);

    suma = suma + numero;
  } else {
    if (numero != undefined) {
      alert(numero + " No es un numero");
    }
  }
} while (numero != undefined);

document.write(suma);

