/* Hacer hablar el navegador
let texto = "Hola desconocido, que quieres hacer?";
const hablar = (texto) => 
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto);
*/
console.log(document.body);
/*
console.log("******************Elementos del documento***************");
console.log(document);
console.log(document.head);
console.log(document.documentElement);
console.log(document.characterSet);
console.log(document.doctype);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
etc*/

//selectores de NODOS
//capturar elementos por tag
console.log(document.getElementsByTagName("figure"));
//capturar elementos por clase
console.log(document.getElementsByClassName("card"));
//capturar elementos por name
console.log(document.getElementsByName("name"));
//capturar un elemento por id
console.log(document.getElementById("menu"));
//NOTA: con querySelector se puede capturar el primer elemento con el nombre o clase o id
console.log(document.querySelector("#menu"));
//NOTA: con querySelectorAll se pueden capturar todos los elementos con el nombre o clase definido
console.log(document.querySelectorAll(".card"));

//Guardar en variables elementos del dom
const $linkDOM = document.querySelector(".link-dom");
//usar la variable
$linkDOM.setAttribute("target", "_blank");
//al usar _blank es recomendable acompañar con el sig atributo para evitar hackeos
$linkDOM.setAttribute("rel", "noopener");
//modificar enlace
$linkDOM.setAttribute("href", "http://www.google.com.co");

//Acceder a estilos
console.log($linkDOM.style.color);
