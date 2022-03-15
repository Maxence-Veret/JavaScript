import {getBeers} from "./beer_service.js";

// test();

// getBeers(10);

// comme on a trnasformé notre fonction dans beer_service en promesse il faut changer l'écriture d'appel de la fonction.
// let beers = await getBeers(10);
// console.log(beers);

// comment l'appeler proprement.
getBeers(10)
    .then(beers => {
        let html = beers.map(b => {
            return `
            <div id="beer-${b.id}">
                <h2>${b.name}</h2>
                <p>${b.description}</p>
                <figure>
                    <img src=${b.imageUrl} alt="${b.name}">
                </figure>
                </p>
                <p id="la">
                <span>Premier brassage le : ${b.firstBrewed}</span>
                <span>Taux d'alcool : ${b.abv}</span>
                </p>
            </div>
            `;
        });
        // = un tableau et avec join, on lui demande de de joindre les éléments à la suite.
        document.getElementById('beers').innerHTML = html.join("");
    })