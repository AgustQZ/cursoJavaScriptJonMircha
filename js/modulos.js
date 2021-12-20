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
//contarStr("Hola Agus");


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
//cortarStr("Hola Agus", 2);


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
//devolverArray("Hola Agus", " ");


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
//multiplicarStr("Hola Agus");


/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
---------------mi solucion----------------------------------------------*/
const invertirStr = (str = "") => 
    (!str)
        ?console.warn('No se ha introducido ningun texto')
        :console.info(str.split("").reverse().join(""));

//invertirStr("hola ema de nuevo")
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
//contarRepetido("Hola hola hola, como estamos je je je", "je");

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
//palindroma("Salas");

/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
---------------mi solucion----------------------------------------------*/

/*-----------solucion optima--------------------------------------------*/
const eliminarCaracteres = (str="", clave="") =>
    (!str)
        ?console.warn("No se ha ingresado texto")
        :(!clave)
            ?console.warn("No se ha ingresado palabra clave")
            :console.info(str.replace(new RegExp(clave, "ig"), ""));

//eliminarCaracteres("a1, b2, c3, d4, a5", "a");
/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
---------------mi solucion----------------------------------------------*/

/*-----------solucion optima--------------------------------------------*/
const numPrimo = (num = undefined) => {
    if(num === undefined)
        return console.warn("No se ha ingresado ningun numero");
    if(typeof num !== "number")
            return console.error("El dato ingresado no es un numero");
    if(num === 0)
        return console.error("El numero no puede ser 0");
    if(num === 1)
        return console.error("El numero no puede ser 0");
    if(Math.sign(num) === -1)
        return console.error("El numero ingresado no puede ser negativo");
    
    let divisible = false;

    for(let i=2; i<num;i++) {
        if(num % i === 0){
            divisible = true;
            break;
        }
    }
    
    return (divisible)
        ? console.info("El numero ingresado NO es un numero primo")
        : console.info("El numero ingresado SI es un numero primo");
}
//numPrimo(3);
/*
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.*/
const numParImpar = (num = undefined) => {
    if(num === undefined)
            return console.warn("No se ha ingresado ningun numero");
    if(typeof num !== "number")
            return console.error("El dato ingresado no es un numero");

    return ((num % 2) === 0)
        //verdadero
        ?console.info(`El numero ${num} es PAR`)
        //falso
        :console.info(`El numero ${num} es IMPAR`);
}
//numParImpar(10);

/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/
const calcularEdad = (fecha = undefined) => {
    if(fecha === undefined)
        return console.warn("Ninguna fecha ingresada");
    if(!(fecha instanceof Date))
        return console.error("No se ha ingresado una fecha valida");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosMS = 1000 * 60 * 60 * 24 * 365,
    anios = Math.floor(hoyMenosFecha / aniosMS);

    return(Math.sign(anios) === -1)
        ? console.info(`Faltan ${Math.abs(anios)} años para el ${fecha.getFullYear()}`)
        :(Math.sign(anios) === 1)
            ? console.info(`La edad es ${anios} años`)
            : console.info("Estamos en el mismo año")
}
//calcularEdad(new Date(2087, 0, 20));
/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/
const validarNombre = (nombre = "") => {
    if(!nombre)
        return console.warn("No se ha ingresado ningun nombre");
    if(typeof(nombre) !== "string")
        return console.error("No se ha introducido un nombre valido");
    //^para que no exista nada antes de la expresion
    //[] para agrupar   // \s para aceptar espacios en blanco
    //$ para que no haya nada despues de la expresion  // g para buscar en todas partes
    let expresionRegular = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

    return(expresionRegular)
        ?console.info(`El nombre es valido`)
        :console.error(`El nombre ${nombre} NO es valido`)
}
//validarNombre("Agus QZ20");

/*20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.*/
const validarEmail = (email = "") => {
    if(!email)
        return console.warn("No se ha ingresado ningun email");
    if(typeof(email) !== "string")
        return console.error("No se ha introducido un email valido");

    let expresionRegular = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return(expresionRegular)
        ?console.info(`El email es valido`)
        :console.error(`El email ${email} NO es valido`)
}
//validarEmail("agus@hz.com");

/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/

/*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
27) Programa una clase llamada Pelicula.*/
class Pelicula {
    constructor({id,titulo,director,estreno,pais,genero,calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.genero = genero;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
    }

    // atributo estatico obtenedor o get
    static get listaGeneros() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Triller", "War", "Western"];
    }
    // metodo estatico
    static generosAceptados () {
        return console.info(`Los generos aceptados son:\n${Pelicula.listaGeneros.join(", ")}`)
    }

    //funciones
    validarCadena(propiedad, valor) {
        if(!valor)
            return console.warn(`${propiedad} "${valor}" esta vacio.`)
        if(typeof(valor) !== "string")
            return console.error("Debe ser un texto")
        return true;
    }

    validarLongitudCadena(propiedad, valor, longitud) {
        if(valor.length>longitud)
            return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud}).`);
        return true;
    }

    validarNumero(propiedad, valor) {
        if(!valor)
            return console.warn(`${propiedad} "${valor}" esta vacio.`)
        if(typeof(valor) !== "number")
            return console.error("Debe ser un numero.")
        return true;
    }

    validarArreglo(propiedad, valor) {
        if(!valor)
            return console.warn(`${propiedad} "${valor}" esta vacio.`)
        if(!(valor instanceof Array))
            return console.error(`${propiedad}: Debe ser un arreglo`);
        if(valor.length === 0)
            return console.error("Esta vacio");
        for(let cadena of valor) {
            if(typeof cadena !== "string")
                return console.error(`${cadena}: debe ser una cadena de texto`);
        }
        return true;
    }

    //metodos
    validarIMDB(id){
        if(this.validarCadena("codigoId", id)) {
            //expresion para validar el codigo del id
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
                return console.error(`CodigoId: "${id}" no es valido, se compone de 9 caracteres, los primeros 2 letras y los 7 finales numeros.`)
            }
        }

    }

    validarTitulo(titulo){
        if(this.validarCadena("Titulo", titulo))
            this.validarLongitudCadena("Titulo", titulo, 100);
    }

    validarDirector(director){
        if(this.validarCadena("Director", director))
            this.validarLongitudCadena("Director", director, 50);
    }

    validarEstreno(estreno){
        if(this.validarNumero("Año estreno", estreno)) {
            //expresion para validar el año de estreno
            if(!(/^([0-9]){4}$/.test(estreno))) {
                return console.error(`Año de estreno: "${estreno}" no es valido, se compone de 4 numeros.`)
            }
        }

    }

    validarPais(pais) {
        this.validarArreglo("Pais", pais);
    }
}

//Ver genenor aceptados
Pelicula.generosAceptados();

//creacion de la pelicula
const pelicula = new Pelicula({
    id: "az1234567",
    titulo: "Titulo pelicula 1",
    director: "Agustin Quiceno",
    estreno: 2021,
    pais: ["japon", "australia", "hawai"]
});