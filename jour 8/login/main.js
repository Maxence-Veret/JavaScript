import {getUsers} from "./login_service.js";

getUsers(2)
    .then(logins => {
        let html = logins.map(l => {
            return `
                <ul>
                    <li>Username : ${l.name}</li>
                    <li>Email : ${l.email}</li>
                    <li>telephone : ${l.phone}</li>
                    <li>password : ${l.cell}</li>
                </ul>
            `;
        });
        document.getElementById('liste').innerHTML = html.join("");
    })

