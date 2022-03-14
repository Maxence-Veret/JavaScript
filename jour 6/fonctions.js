// les tableaux.

//json est un langage de programmation créé en JS.

console.log("Ca fonctionne");
// en allant dans Executer et débuger, puis en cliquant sur le premier bouton,, cela ouvre le terminal node js qu'on aura choisit.
// en faire l'option en bleu juste en dessous pour creer un fichier pour executer le terminal plus rapidement.
// en cliquant sur le triangle vert ou en tapant sur f5.

let nbr = 10;
let str = "chaine de caractères";
let tab = [12, 35, 89, 9, 6];


// cette fonction est un passage par valeur, il copie la valeur mais ne peut pas la changer.
function increment(n) {
    n++;
}
// n copie la valeur de nbr, qui est 10 et ne la change pas.
increment(nbr);
console.log(nbr);


//////////////////////////////////////////////////////

function increment(n) {
    n++;
}
// Pour que cela fonctionne il faut ecrasé la valeur de nbr à l'arrivée.
// nbr = increment(nbr);
console.log(nbr);





// meme cas pour str, il a pris la chaine de caractères et la copié dans un emplacement impossible à changer.
function upper(chaine) {
    chaine = chaine.toUpperCase();
}
// chaine copie la valeur de str, et ne peut pas la changer.
upper(str);
console.log(str);


// les copie par référence sont faites pour fonctionner dans les tableaux.
// fonctionne parce que tab est un objet et pas un bouléen, entier, chaine, etc...
function addNumber(liste, num){
    liste.push(num);
}
// liste copie tab et ces valeurs, et on lui demande de rajouter une valeur supplémentaire à la suite en dehors de la fonction.
addNumber(tab, 123456789);
console.log(tab);


function tri(liste) {
    // les trois petis points sont là pour indiquer d'afficher d'une autre manière le tableau.
    let t = [...liste];
    t.sort();
    return t;
}

tri(tab);
console.log(tab)

//les this de la fonction normales nous retournent plus d'éléments.
function es5() {
    console.log(this);
}

es5();

//les deux fonctions sont différentes.

// on peut insérer dans une constante, une fonction fléchée.
const es6 = () => {
    console.log(this);
    return this;
}

es6();

// pas de variables, besoin de parenthèses.
const es6_1 = () => "Fonction es6 sans mes accolades !!";
console.log(es6_1());

// une seule variable, pas besoin de parenthèses.
const es6_2 = num => "Fonction es6 num " + num;
console.log(es6_2(10));

// deux variables, besoin de parenthèses.
const es6_3 = (num, str) => "Fonction es6 num " + num + " et str " + str;
console.log(es6_3(10, "sam"));

const es6_4 = () => {return "Fonction es6 sans mes accolades !!";};
console.log(es6_4());


function returnMultiple(film) {
    // Marry-me-1080p-VOSTFR.samsam.mkv
    let lastDot = film.lastIndexOf( '.' );
    let name = film.substring(0, lastDot);
    let extension = film.substring(lastDot);
    // console.log(name, extension);
    return [name, extension];
}

// returnMultiple('Marry-me-1080p-VOSTFR.samsam.mkv');

// pour faire du destructuring il faut créer une variable qui sera un tableau.
let [nom, ext] = returnMultiple('Marry-me-1080p-VOSTFR.samsam.mkv');
console.log(nom);
console.log(ext);

// autre solution.

// on retourne sous forme d'objet
function returnMultipleObj(film) {
    // Marry-me-1080p-VOSTFR.samsam.mkv
    let lastDot = film.lastIndexOf( '.' );
    let name = film.substring(0, lastDot);
    let extension = film.substring(lastDot);
    return {nom: name, ext: extension, len: film.length};
}
 let {len} = returnMultipleObj('Marry-me-1080p-VOSTFR.samsam.mkv');
 console.log(len);
// console.log(ext);
// il est possible de renommer la variable comme ceci :
let {len: longueur} = returnMultipleObj('Marry-me-1080p-VOSTFR.samsam.mkv');
console.log(longueur);