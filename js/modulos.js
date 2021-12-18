// importar las constantes desde el archivo constantes.js
import{PI}from "./constantes.js";
// importar sumar y restar desde el archivo aritmetica.js
import{aritmetica}from "./aritmetica.js"

console.log(PI);
console.log(aritmetica.sumar(5,2));
console.clear();



                             /* *** EJERCICIOS ***

1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
-----------mi solucion--------------------------------------------
function contarString(cadena){
    console.log("La cadena de texto contiene estos caracteres: ");
    console.log(cadena.length);
};
contarString("Cuantas letras hay aqui?w");
-----------solucion optima--------------------------------------------*/
const contarStr = (str = "") =>
    (!str)
        ?console.warn("No se ha ingresado una cadena de texto")
        :console.info(`La cadena de texto "${str}", tiene ${str.length} caracteres.`);
//invocar la funcion
contarStr("Hola Agus");


/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
-----------mi solucion--------------------------------------------
function recortarString(cadena, cant){
    console.log(cadena);
    console.log(cadena.slice(0, cant));
};
recortarString("Cuantas", 4);
-----------solucion optima--------------------------------------------*/
const cortarStr = (str = "", cant = undefined) =>
    (!str)
        ?console.warn("No se ha ingresado una cadena de texto")
        :(cant === undefined)
            ?console.warn("No se ha ingredado la cantidad a recortar")
            :console.info(`La cadena de texto "${str}", al recortarse queda asi: \n"${str.slice(0,cant)}".`);
//invocar la funcion
cortarStr("Hola Agus", 2);


/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
-----------mi solucion--------------------------------------------
function devolverArray(texto, separador){
    console.log(texto, texto.split(separador));
}
devolverArray("la función muestra mensajes indicando", " ");
-----------solucion optima--------------------------------------------*/
const devolverArray = (str="", separador=undefined) =>
    (!str)
        ?console.warn("No se han ingresado cadenas de texto")
        :(separador===undefined)
            ?console.warn("No se ha ingresado el tipo de separador")
            :console.info(str.split(separador));
//invocar la funcion
devolverArray("Hola Agus", " ");


/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
-----------mi solucion--------------------------------------------
function multiplicarStrs(str, cant){
    console.log(str, str.repeat(cant));
}
multiplicarStrs("Agus", 4);
-----------solucion optima--------------------------------------------*/
const multiplicarStr = (str = "", cant = undefined) => {
    if(!str) return console.warn("No se han ingresado cadenas de texto");
    if(cant === undefined) return console.warn("No se ha ingresado la cantidad a multiplicar");
    if(cant === 0) return console.error("No se puede multiplicar por cero");
    if(Math.sign(cant) === -1) return console.error("No se permiten numeros negativos");
    for(let i = 1; i <= cant; i++) console.info(`${str}, ${i}`);
}
//invocar la funcion
multiplicarStr("Hola Agus");


/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
---------------mi solucion----------------------------------------------*/
const invertirStr = (str = "") => 
    (!str)
        ?console.warn('No se ha introducido ningun texto')
        :console.info(str.split("").reverse().join(""));

invertirStr("hola ema de nuevo")
/*-----------solucion optima--------------------------------------------*/
//la misma que la mia


/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
---------------mi solucion----------------------------------------------*/
// no la pude hacer
/*-----------solucion optima--------------------------------------------*/
const contarRepetido = (str="", clave="") => {
    if(!str)
        return console.warn("No se ha ingresado texto");
    if(!clave)
        return console.warn("No se ha ingresado la palabra clave");
    
    let i=0, contador=0;

    while(i !== -1){
        i = str.indexOf(clave, i);
        if(i !== -1) {
            i++;
            contador ++;
        }
    }
    return console.info(`La palabra ${clave} se repite ${contador} veces.`)
}
//invocar la funcion
contarRepetido("Hola hola hola, como estamos je je je", "je");

/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
---------------mi solucion----------------------------------------------
const palindroma = (str = "") => {
    if(!str)
        return console.warn("No se ha ingresado ninguna palabra");
    str = str.toLowerCase();
    let invertida = str.split("").reverse().join("");
    if(str === invertida)
        return console.info(`La palabra "${str}" es palindroma`);
    else
        return console.info(`La palabra "${str}" no es palindroma`)
}
palindroma("Salas");
-----------solucion optima--------------------------------------------*/
const palindroma = (str = "") => {
    if(!str)
        return console.warn("No se ha ingresado ninguna palabra");
    str = str.toLowerCase();
    let invertida = str.split("").reverse().join("");
    return(str === invertida)
        ?console.info(`La palabra "${str}" es palindroma`)
        :console.info(`La palabra "${str}" no es palindroma`)
}
palindroma("Salas");

/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
---------------mi solucion----------------------------------------------*/

/*-----------solucion optima--------------------------------------------*/
const eliminarCaracteres = (str="", clave="") =>
    (!str)
        ?console.warn("No se ha ingresado texto")
        :(!clave)
            ?console.warn("No se ha ingresado palabra clave")
            :console.info(str.replace(new RegExp(clave, "ig"), ""));

eliminarCaracteres("a1, b2, c3, d4, a5", "a");
/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.


10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.


11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */