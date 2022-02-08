
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