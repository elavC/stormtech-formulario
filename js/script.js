let currentIndex = 0;
let card = document.getElementsByClassName('card');
const max = card.length;

console.log(max);

const next = document.getElementById('next');
const back = document.getElementById('back');
const send = document.getElementById('send');

function nextPage() {

    card[currentIndex].classList.remove("selected");

    currentIndex++;

    if(currentIndex == max - 1) {
        next.style.display = 'none';
        send.style.display = 'block';
    }

    card[currentIndex].classList.add("selected");
};

function backPage() {

    card[currentIndex].classList.remove("selected");
   
    if(currentIndex === 0) {
        currentIndex = 0;
    }

    if (currentIndex > 0) {
        currentIndex--;
    }

    card[currentIndex].classList.add("selected");
};

next.addEventListener('click', nextPage);
back.addEventListener('click', backPage)