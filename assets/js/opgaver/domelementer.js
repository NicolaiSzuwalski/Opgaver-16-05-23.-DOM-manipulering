/* DOMcelementer */



/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

// din kode her
const redFigure = document.getElementById('redFigure')
const yellowFigure = document.getElementById('yellowFigure')

console.log(redFigure);
console.log(yellowFigure);

/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/


// din kode her

redFigure.style.backgroundColor = 'blue'
yellowFigure.style.backgroundColor = 'blue'


/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/


// din kode her
const opgave2 = document.getElementById('opgaveTwo')

let opg2h2 = document.createElement('h2');
let opg2p = document.createElement('p');

opg2h2.innerText = "Opgave 2.1 løsning";
opg2p.innerText = "Jeg har løst opgave 2.1";

opgave2.appendChild(opg2h2);
opgave2.appendChild(opg2p);

// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

// din kode her
const purpleFigures = document.getElementsByClassName('purpleFigures');
console.log(purpleFigures);


/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map funktionen til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

// din kode her



const  myLiveList = Array.from(purpleFigures, (x) => x.style.backgroundColor = 'red');

console.log(myLiveList);






/* opgave 3.3
Brug myLiveList til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/




// din kode her
purpleFigures.children[0].style.color = "red";

// Kunne ikke regne denne her ud? :(



/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
*/

const myData = {
    name: 'tiger',
    image: 'assets/img/standard_tiger.jpg',
    description: 'En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.'
};


// din kode her


// Lost :(




