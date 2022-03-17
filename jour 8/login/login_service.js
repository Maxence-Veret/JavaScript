import {loginModel} from "./login_model.js";

export const getUsers = async (nbr = 50, lang = "fr") => {
	const response = await fetch(`https://randomuser.me/api/?nat=${lang}&results=${nbr}&inc=gender,name,location,email,phone,cell,picture`);
	const res = await response.json();
	return res['results'].map(r => {
        //console.log(toUserModel(res));
		return new loginModel(
                    r['gender'],
                    r['name']['first'],
                    r['name']['last'],
                    r['location']['city'],
                    r['email'],
                    r['phone'],
                    r['cell'],
                    r['picture']['medium']
        );
	})
}

// function toUserModel(r) {
//     // créer une liste de loginModel et on creer un objet nommé là js.
//     return r.map(js => {
//         // là on va appeler la fonction du fichier login_model.js, et on appelle les élèments dedans.
//         return new loginModel(
//             js['gender'],
//             js['name'],
//             js['location'],
//             js['email'],
//             js['phone'],
//             js['cell']
//         );
//     });
// }