const clock = document.querySelector('.clock');
setInterval( () => clock.innerText = new Date().toLocaleTimeString(), 1000  );

const countCards = 4;
let currentFirst = 0;
let currentSecond = 1;
let currentThird = 2;

function slide(currentFirst, currentSecond, currentThird) {
    document.querySelector('.carousel .first-card img').src = cards[currentFirst].img;
   
    document.querySelector('.carousel .second-card img').src = cards[currentSecond].img;
   
    document.querySelector('.carousel .third-card img').src = cards[currentThird].img;
    }


function forward() {
    currentFirst = ++currentFirst > countCards - 1 ? 0 : currentFirst;
    currentSecond = currentFirst + 1 > countCards - 1 ? 0 : currentFirst + 1;
    currentThird = currentSecond + 1 > countCards - 1 ? 0 : currentSecond + 1;
    slide(currentFirst, currentSecond, currentThird);
}

function backward() {
    currentThird = --currentThird < 0 ? countCards - 1 : currentThird;
    currentSecond = currentThird - 1 < 0 ? countCards - 1 : currentThird - 1;
    currentFirst = currentSecond - 1 < 0 ? countCards - 1 : currentSecond - 1;
    slide(currentFirst, currentSecond, currentThird);
}

setInterval(backward, 10000);

const cards = [
{
    img: 'img/marie-claire.svg',
},
{
    img: 'img/tiffany.svg',
},
{
    img: 'img/vogue.svg',
},
{
    img: 'img/bazaar.svg',
}
];

document.querySelector('.carousel .btn-forward').addEventListener('click', forward);

document.querySelector('.carousel .btn-back').addEventListener('click', backward);