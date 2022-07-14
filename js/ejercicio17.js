let vocales = ["a", "e", "i", "o", "u"];
let texto = prompt("Introduce un texto");
//PASAMOS EL TEXTO A MINÚSCULAS
let textomin = texto.toLowerCase();
//DECLARAMOS LA VARIABLE posicion DONDE GUARDAREMOS LA POSICIÓN DE LA VOCAL
let posicion = 0;
//DECLARAMOS UNA BANDERA Y LA INICIALIZAMOS A FALSE
let parar = false;
//BUCLE QUE RECORRE EL TEXTO
for (let i = 0; i < textomin.length; i++) {
    //BUCLE QUE RECORRE EL ARRAY DE VOCALES
    for (let j = 0; j < vocales.length; j++) {
        //SI LA VOCAL i ESTÁ EN EL ARRAY DE VOCALES
        if (vocales[j] == textomin.charAt(i)) {
            //GUARDAMOS LA POSICIÓN
            posicion = i;
            //PONEMOS LA BANDERA EN TRUE
            parar = true;
            //CORTAMOS LA EJECUCIÓN DEL BUCLE INTERIOR
            break;
        }
    }
    //SI LA BANDERA ESTÁ EN TRUE
    if (parar) {
        //CORTAMOS LA EJECUCIÓN DEL BUCLE EXTERIOR
        break;
    }
}
//IMPRIMIMOS EL RESULTADO
document.write("La primera vocal está en la posición " + posicion);