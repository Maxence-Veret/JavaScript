import {BeerModel} from"./beer_model.js";

// pour tester si tout fonctionne.
// export function test(){
//     console.log("je suis dans mon service");
//     console.log(new BeerModel(1, "beer", "01/2021", "lorem"));
// }

// function getBeers(numberBeer = 10) {
//     // le fetch() est une requete qui est une promesse...
//     // on lui retire le max de la liste qui était à 10 pour lui assigné un élément qu'on pourra modifier.
//     fetch("https://api.punkapi.com/v2/beers?page=1&per_page=" + numberBeer)
//     // Après lui avoir lancé la requête on va lui demnader la reponse à la promesse dite precedement.
//         .then(response => response.json())
//             // on lui demande une réponse à notre promesse.
//             // cela va nous retourner du json().
//             // et avec then, on va lui demander ensuite :
//             // console.log();
//         .then(result => {
//             console.log(result);
//         });
// }

// async = methode asynchrone, qui est une promesse, le await ne marche pas si la fonction n'est pas asynchrone.
async function getBeers(numberBeer = 10) {
    const response = await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=" + numberBeer)
    const result = await response.json();
    //console.log(result);
    // là on affiche les rsultats de la fonction jsonToBeerModel, qui nous renverra des tableaux.
    // console.log(jsonToBeerModel(result));
    return jsonToBeerModel(result);
}

function jsonToBeerModel(beersJson) {
    // créer une liste de BeerModel et on creer un objet nommé là js.
    return beersJson.map(js => {
        // là on va appeler la fonction du fichier beer_model.js, et on appelle les élèments dedans.
        return new BeerModel(
            js['id'],
            js['name'],
            js['first_browed'],
            js['description'],
            js['image_url'],
            js['abv']
        );
    });
}

export {getBeers};