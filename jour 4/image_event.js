// on va chercher la photo
const photo = document.getElementById('photo');

//on va chercher la balise dans laquelle est l'image
// querySelector sert à taper la balise voulue précisement en l'appelant comme un CSS.
const figure = document.querySelector('figure');

// on appel indépendement dans une const les buttons.
const scaleDown = document.querySelector('button#scale-down');
const scaleUp = document.querySelector('button#scale-up');
const scaleZero = document.querySelector('button#scale-zero');
const moveRight = document.querySelector('button#move-right');
const none = document.querySelector('button#none');
const block = document.querySelector('button#block');

// On creer une method qui va utiliser le meme principe de CSS
// en utilisant le .style.
scaleDown.addEventListener('click', function () {
    photo.style.transform = 'scale(0.8)';
});

scaleUp.addEventListener('click', () => {
    photo.style.transform = 'scale(1.2)';
});

scaleZero.addEventListener('click', () => {
    photo.style.transform = 'scale(1)';
});

moveRight.addEventListener('click', () => {
    photo.style.transform = "translateX(100px)";
});

none.addEventListener('click', () => {
    photo.style.display = 'none';
});

block.addEventListener('click', () => {
    photo.style.display = 'block';
});