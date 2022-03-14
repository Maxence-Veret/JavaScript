// @ts-ignore

// il y a deux manières de créer des objets écrite en 'es 5': 

// 1er méthode ;
const gaufrier = new Object();
gaufrier.largeur = 20;
gaufrier.longueur = 15;
gaufrier.cuire = () => {
    console.log("cuisson");
}

console.log(gaufrier);
gaufrier.cuire();

// 2eme méthode ;

function Table(largeur, longueur, hauteur){
    this.largeur = largeur;
    this.longueur = longueur;
    this.hauteur = hauteur;
    // on peut lui rajouter un paramètre supplémentaire.
    this.materiau = "bois";
    this.jouer = () => {
        console.log("Je joue au Ping-Pong");
    }
}
const tableJeu = new Table(157, 274, 76);
tableJeu.materiau = "verre";
tableJeu.nbPied = 4;
// taper delete avant l'array du tableau voulu pour supprimer cet élément.
delete tableJeu.materiau;
console.log(tableJeu);
tableJeu.jouer();

//3eme méthode écrite en langage Json :

const sam = {
    prenom: "samuel",
    nom: "michaux",
    age: 40,
    boire: () => {
        console.log("Je bois beaucoup ...... d'eau :(");
    }
};console.log(sam);
sam.boire();


/////////////////'es 6'////////////////////

// en es 6 on préfére niormalement créer un fichier dédié à notre objet.

//écriture en Pascalcase
class Personne {
    constructor(prenom, nom, age) {
        this._prenom = prenom;
        this._nom = nom;
        this._age = age;
        this._taille = 180;
    }

    //pour ne pas pouvoir modifier certains paramètres, mettre un underscore avant le nom,
    // puis créer un get (getter) pour qu'il retourne ce que vaut dans cette exemple prénom.
    // on pourra donc modifier le get sans modifier le nom directement.

    get prenom() {
        return this._prenom;
    }

    get nom() {
        return this._nom;
    }

    get age() {
        return this._age;
    }

    get taille() {
        return this._taille;
    }

    set taille(nbr) {
        this._taille = nbr;
    }
    
    // exemple de comment écrite une méthode dans cette class.
    manger(){
        console.log("je mange");
    }

    toString() {
        return `Je m'appelle ${this._prenom} ${this.nom} et j'ai ${this._age} et je mesuse ${this._taille}cm`;
    }
}

const antony = new Personne("antony", "coucke", "33");
// pour modifier la source il faut taper :
antony._prenom = "ANTONY";
// si tu reessaye avec "  antony.prenom = "ANTONY" " cela ne marchera pas car on l'a bloqué plus haut.
console.log(antony.prenom);
// cette écrite marche pour ("taille") car on a créé un set dans notre objet.
antony.taille = 170;
console.log(antony.taille);
antony.manger();
console.log(antony);