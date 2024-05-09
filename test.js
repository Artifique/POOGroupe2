var gestionnaire = /** @class */ (function () {
    function gestionnaire(id_gest, nom_gest, email_gest, mdp_gest) {
        this.id_gest = id_gest;
        this.nom_gest = nom_gest;
        this.email_gest = email_gest;
        this.mdp_gest = mdp_gest;
    }
    gestionnaire.ajoutUser = function (id_gest, nom_gest, email_gest, mdp_gest) {
        return new gestionnaire(id_gest, nom_gest, email_gest, mdp_gest);
    };
    ;
    gestionnaire.modifUser = function (id_gest, nom_gest, email_gest, mdp_gest) {
    };
    ;
    gestionnaire.suppUser = function (id_gest) {
    };
    ;
    return gestionnaire;
}());
;
var newuser = new gestionnaire(1, "moussa", "moussa@gmail.com", "#0I?ZDSK?(-'-(èèDè");
console.log("ID de l'utilisateur:", newuser.email_gest);
