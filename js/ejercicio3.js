let resultado = "";

do{
    let cadena= prompt("Ingrese una cadena");
    if (resultado == ""){
        resultado = resultado + cadena
    }
    else{
        resultado = resultado + "-"+ cadena
    }
}while(confirm("¿Desea seguir?"))
document.write(resultado)