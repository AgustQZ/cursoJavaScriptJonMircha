// importar las constantes desde el archivo constantes.js
import{PI}from "./constantes.js";
// importar sumar y restar desde el archivo aritmetica.js
import{aritmetica}from "./aritmetica.js"

console.log(PI);
console.log(aritmetica.sumar(5,2));
console.clear();


// *** EJERCICIOS *** //
function contarString(cadena){
    console.log("La cadena de texto contiene estos caracteres: ");
    console.log(cadena.length);
};

contarString("Cuantas letras hay aqui?w");