import {getUsers} from "./login_service.js";
// /*html*/ sert à afficher les couleurs emmets
getUsers(50).then(logins => {
        let html = logins.map(l => {
            return /*html*/`
                <div class="profil">
                <div class="menuHide">
                    <ul>
                        <img src="${l.picture}">
                        <li class="name"> ${l.name} ${l.nom}</li>
                        <li>${l.locationCity}</li>
                        <li>${l.email}</li>
                    </ul>
                </div>
                </div>
            `;
        });
        document.getElementById('liste').innerHTML = html.join("");
    })

