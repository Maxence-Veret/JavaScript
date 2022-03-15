// plusieurs façcon pour exporter un model.

// model de base.
// class BeerModel {
//     constructor(id, name, firstBrewed, description, imageUrl, abv){
//         this.id = id;
//         this.name = name;
//         this.firstBrewed = firstBrewed;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this.abv = abv;
//     }
// }

// 1er methode :
// export class BeerModel {
//     constructor(id, name, firstBrewed, description, imageUrl, abv){
//         this.id = id;
//         this.name = name;
//         this.firstBrewed = firstBrewed;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this.abv = abv;
//     }
// }

// 2eme methode.
// export default class BeerModel {
//     constructor(id, name, firstBrewed, description, imageUrl, abv){
//         this.id = id;
//         this.name = name;
//         this.firstBrewed = firstBrewed;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this.abv = abv;
//     }
// }

class BeerModel {
    constructor(id, name, firstBrewed, description, imageUrl, abv){
        this.id = id;
        this.name = name;
        this.firstBrewed = firstBrewed;
        this.description = description;
        this.imageUrl = imageUrl;
        this.abv = abv;
    }
}

export {BeerModel};