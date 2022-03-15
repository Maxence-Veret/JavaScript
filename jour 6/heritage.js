class Mammifere {
    constructor(nom, taille) {
        this.nom = nom;
        this.taille = taille;
    }
}


// Avec heritage.
class Homme extends Mammifere {
    constructor(nom, taille) {
        super(nom, taille);
    }

    conduire() {
        return "L'homme conduis";
    }
}

//Sans héritage.
// class Homme {
//     constructor(nom, taille) {
//         this.nom = nom;
//         this.taille = taille;
//     }
// }


// Avec heritage.
class Singe extends Mammifere {
    constructor(nom, taille) {
        super(nom, taille);
    }
}

//Sans héritage.
// class Singe {
//     constructor(nom, taille) {
//         this.nom = nom;
//         this.taille = taille;
//     }
// }


console.log(new Singe("Singe", 150));
console.log(new Homme("Homme", 170).conduire());