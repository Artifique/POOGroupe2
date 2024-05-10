var evenement = /** @class */ (function () {
    function evenement(id_event, id_lieu, id_org, titre, description) {
        this.id_event = id_event;
        this.id_lieu = id_lieu;
        this.id_org = id_org;
        this.titre = titre;
        this.description = description;
    }
    return evenement;
}());
;
var gestionnaire = /** @class */ (function () {
    function gestionnaire(id_gest, nom_gest, email_gest, mdp_gest) {
        this.id_gest = id_gest;
        this.nom_gest = nom_gest;
        this.email_gest = email_gest;
        this.mdp_gest = mdp_gest;
    }
    gestionnaire.ajoutorg = function (id_gest, nom_gest, email_gest, mdp_gest) {
        return new gestionnaire(id_gest, nom_gest, email_gest, mdp_gest);
    };
    ;
    gestionnaire.modiforg = function (id_gest, nom_gest, email_gest, mdp_gest) {
    };
    ;
    gestionnaire.supporg = function (id_gest) {
    };
    ;
    gestionnaire.addevent = function (id_event, id_lieu, id_org, titre, description) {
        return new evenement(id_event, id_lieu, id_org, titre, description);
    };
    ;
    gestionnaire.modifevent = function (id_event, id_lieu, id_org, titre, description) {
    };
    ;
    gestionnaire.suppevent = function (id_event) {
    };
    ;
    return gestionnaire;
}());
;
var neworg = gestionnaire.ajoutorg(2, "moussa", "moussa@gmail.com", "#0I?ZDSK?(-'-(èèDè");
var new_event = gestionnaire.addevent(1, 1, 1, "Festival", "hebfregr gf,ndgbrjkthvr eiudkjvhr: string");
console.log("ID de l'utilisateur:", neworg);
console.log("ID de l'evenement:", new_event);
