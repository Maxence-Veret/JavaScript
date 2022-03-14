// si on arrive pas à lancer le terminal sur un autre fichier, 
// il faut aller dans le lauch.js et changer le nom de la direction.


let t = [12, 34, "coucou", false];
console.log(t)
let [prenom, nomm, age] = ["sam", "mich", 40];
console.log(nomm, prenom, age);
let t1 = new Array(3);

// ajouter dans un tableau.
t.push("ajout");
console.log(t);
// push("element") sert à insérer dans le tableau existant.

// pour supprimer le dernier élément on utilise l'élément pop().
t.pop();
console.log(t);

// pour supprimer le premier élément on utilise .shift().
t.shift();
console.log(t);

// insertion en début de tableau, on utilise unshift().
t.unshift("samuel");
console.log(t);

// supprimer avec un index, on utilise splice().
t.splice(2, 1);
console.log(t);

//copie de tableau, deux options : 
// 1er option.
let t2 = [...t];
// 2eme option.
let t3 = t.slice();



// pour parcourir un tableau ?

t.push(12, 56, 98, -34, -27, 0);
console.log(t);


// creer une fonction pour enlever d'un tableau, tous ce qui n'est pas un nombre.
// 1er methode :
for (let i = 0 ; i < t.length ; i++) {
    if (typeof t[i] !== 'number'){
        t.splice(i, 1);
    }
}
console.log(t);


// 2eme methode, utiliser le filter :
// dans t, on va filtrer ce que l'on veut garder, en gardant ce qui est égal au type nombre.
t = t.filter((value => (typeof value === 'number')));
console.log(t);


// 3eme methode.
t.forEach((value, index, arr) => {
    if (typeof value !== 'number') {
        arr.splice(index, 1);
    }
});
console.log(t);


// 4eme methode.
let t5 = t.map((value) => {
    if (typeof value === 'number') {
        return value;
    }
});
console.log(t5);

//5eme methode.
// t.reduce();