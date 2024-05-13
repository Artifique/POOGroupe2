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
var organisateur = /** @class */ (function () {
    function organisateur(id_org, nom_org, email_org, mdp_org) {
        this.id_org = id_org;
        this.nom_org = nom_org;
        this.email_org = email_org;
        this.mdp_org = mdp_org;
    }
    organisateur.addevent = function (id_event, id_lieu, id_org, titre, description) {
        return new evenement(id_event, id_lieu, id_org, titre, description);
    };
    ;
    organisateur.modifevent = function (id_event, id_lieu, id_org, titre, description) {
    };
    ;
    return organisateur;
}());
;
var new_event = organisateur.addevent(1, 13, 33, "Eventify", "AdiaTandia");
console.log("ID evenement:", new_event);
