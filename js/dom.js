
/*
const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figCaption"),
$figCaptionText = document.createTextNode("Arch"),
$cards = document.querySelector(".cards");

$figcaption.appendChild($figCaptionText);
$figure.appendChild($img);
$img.appendChild($figcaption);
$cards.appendChild($figure)


const $meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio"
],
$lista = document.createElement("p"),
$fragment = document.createDocumentFragment();

$meses.forEach(el => {
    const $li = document.createElement("p");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h1>Meses medio año</h1>");
$lista.appendChild($fragment);
document.body.appendChild($lista);
*/

const $cards = document.querySelector("cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
            tittle: "Tecnologia",
            img: "https://placeimg.com/200/200/tech",
        },
        {
            tittle: "Naturaleza",
            img: "https://placeimg.com/200/200/nature",
        },
        {
            tittle: "Animales",
            img: "https://placeimg.com/200/200/animals",
        },
        {
            tittle: "Arquitectura",
            img: "https://placeimg.com/200/200/arch",
        }
    ];

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.tittle);
    $template.querySelector("figcaption").textContent = el.tittle;

    // crear nodo clonado del template
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);
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
