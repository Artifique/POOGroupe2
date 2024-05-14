"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organisateur = void 0;
var mysql = require("mysql");
// Configuration de la connexion à la base de données MySQL
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestevent'
});
console.log(typeof (connection));
// Connexion à la base de données
connection.connect(function (err) {
    if (err) {
        console.error('Erreur lors de la connexion à la base de données:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
    return;
});
// Fin de la connexion a la db 
var Evenement_1 = require("./Evenement");
var Evenement_2 = require("./Evenement");
var Organisateur = /** @class */ (function () {
    function Organisateur(nom_org, email_org, mdp_org) {
        this.nom_org = nom_org;
        this.email_org = email_org;
        this.mdp_org = mdp_org;
    }
    //   Ajout d un evenement a la base de donnee en se servant de la classe Evenement
    Organisateur.prototype.AjouterEventGratuit = function (titre, lieu, nbrplace, dateEvent, description) {
        var evenement = new Evenement_1.Evenement(titre, lieu, nbrplace, dateEvent, description);
        connection.query('INSERT INTO evenement (titre,lieu,nbrplace,dateEvent,description) VALUES (?,?,?,?,?)', [titre, lieu, nbrplace, dateEvent, description], function (err, result) {
            if (err) {
                console.error('Erreur lors de l\'ajout de l\'événement:', err);
                return;
            }
            console.log('Événement ajouté avec succès');
        });
    };
    Organisateur.prototype.AjouterEventPayant = function (titre, lieu, nbrplace, dateEvent, prix, methodepaiement, description) {
        var evenement = new Evenement_2.EvenementPayant(titre, lieu, nbrplace, dateEvent, prix, methodepaiement, description);
        connection.query('INSERT INTO evenement (titre,lieu,nbrplace,dateEvent,prix,methode_paie,description) VALUES (?,?,?,?,?,?,?)', [titre, lieu, nbrplace, dateEvent, prix, methodepaiement, description], function (err, result) {
            if (err) {
                console.error('Erreur lors de l\'ajout de l\'événement:', err);
                return;
            }
            console.log('Événement ajouté avec succès');
        });
    };
    // Modification du contenu d un evenement deja dans la base de donnee
    Organisateur.prototype.ModifierEvent = function (titre, description, id_evenement) {
        connection.query('UPDATE evenement SET  titre =?, description =? WHERE id_evenement =?', [titre, description, id_evenement], function (err, result) {
            if (err) {
                console.error('Erreur lors de la modification de l\'événement:', err);
                return;
            }
            console.log('Événement modifié avec succès');
        });
    };
    return Organisateur;
}());
exports.Organisateur = Organisateur;
;
