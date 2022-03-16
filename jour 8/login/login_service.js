import {loginModel} from "./login_model";

export const getUsers = async (nbr = 50, lang = "fr") => {
	const response = await fetch(`https://randomuser.me/api/?nat=${lang}&results=${nbr}&inc=gender,name,location,email,phone,cell,picture`);
	const res = await response.json();
	return res['results'].map(r => {
        console.log(toUserModel(res));
		return toUserModel(r);
	})
}

function toUserModel(r) {
    // créer une liste de BeerModel et on creer un objet nommé là js.
    return r.map(js => {
        // là on va appeler la fonction du fichier beer_model.js, et on appelle les élèments dedans.
        return new loginModel(
            js['gender'],
            js['name'],
            js['location'],
            js['email'],
            js['phone'],
            js['cell']
        );
    });
}