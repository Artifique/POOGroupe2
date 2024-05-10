// Déclaration de l'énumération en dehors de la classe
enum nom_tic {
    VIIP,
    Grandent,
    pelouse,
}

class typeticket {
    id_tic: number;
    id_event: number;
    nomticket: nom_tic; // Utilisation de l'énumération déclarée précédemment
    constructor(id_tic: number, id_event: number, nomticket: nom_tic) {
        this.id_tic = id_tic;
        this.id_event = id_event;
        this.nomticket = nomticket;
    }
}

// Création d'une instance de la classe typeticket
const ticket = new typeticket(1, 123, nom_tic.pelouse);

// Affichage de l'instance
console.log(ticket);
