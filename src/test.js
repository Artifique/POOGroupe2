// Déclaration de l'énumération en dehors de la classe
var nom_tic;
(function (nom_tic) {
    nom_tic[nom_tic["VIIP"] = 0] = "VIIP";
    nom_tic[nom_tic["Grandent"] = 1] = "Grandent";
    nom_tic[nom_tic["pelouse"] = 2] = "pelouse";
})(nom_tic || (nom_tic = {}));
var typeticket = /** @class */ (function () {
    function typeticket(id_tic, id_event, nomticket) {
        this.id_tic = id_tic;
        this.id_event = id_event;
        this.nomticket = nomticket;
    }
    return typeticket;
}());
// Création d'une instance de la classe typeticket
var ticket = new typeticket(1, 123, nom_tic.pelouse);
// Affichage de l'instance
console.log(ticket);
