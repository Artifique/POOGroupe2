"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gestionnaire = void 0;
var mysql = require("mysql");
var Organisateur_1 = require("./Organisateur");
var Lieu_1 = require("./Lieu");
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
var Gestionnaire = /** @class */ (function () {
    function Gestionnaire(nom, email, mdp) {
        this.nom_ges = nom;
        this.email_ges = email;
        this.mdp_ges = mdp; // Assurez-vous que le mot de passe est stocké de manière sécurisée (hashage)
    }
    Gestionnaire.prototype.AjoutGestionnaire = function () {
        var sql = "INSERT INTO gestionnaire (nom_ges, email_ges, mdp_ges) VALUES (?, ?, ?)";
        connection.query(sql, [this.nom_ges, this.email_ges, this.mdp_ges], function (err, results) {
            if (err) {
                console.log("Erreur lors de l insertion!!");
                return;
            }
            // const id=results.Id;
            console.log("Gestionnaire Inseré !!");
        });
    };
    Gestionnaire.prototype.ModifierGestionnaire = function (nom, email, mdp) {
        var sql = "UPDATE gestionnaire SET nom_ges = '" + nom + "', email_ges = '" + email + "', mdp_ges = '" + mdp + "' WHERE email_ges = '" + email + "'";
        connection.query(sql, function (err, result) {
            if (err) {
                console.log("Erreur lors de la modification!!");
                return;
            }
            console.log("Organisateur Modifié !!");
        });
    };
    Gestionnaire.prototype.SupGestionnaire = function (mail) {
        var sql = "DELETE FROM gestionnaire WHERE email_ges = '" + this.email_ges + "'";
        connection.query(sql, function (err, result) {
            if (err) {
                console.log("Erreur lors de la suppression!!");
                return;
            }
            console.log("Organisateur Supprimé !!");
        });
    };
    Gestionnaire.prototype.AjoutOraganisateur = function (nom_org, email_org, mdp_org) {
        var org1 = new Organisateur_1.Organisateur(nom_org, email_org, mdp_org);
        var sql = "INSERT INTO organisateur (nom_org, email_org, mdp_org) VALUES (?,?,?)";
        connection.query(sql, [nom_org, email_org, mdp_org], function (err, results) {
            if (err) {
                console.log("Erreur lors de l insertion!!");
                return;
            }
            console.log("Oraganisateur Inseré !!");
        });
    };
    Gestionnaire.AddGestion = function (id_g, id_e, date_gest, action) {
        var sql = "INSERT INTO gestion (id_gest,id_event,date_gest,action) VALUES ('?', '?', '?','?)";
        connection.query(sql, [id_g, id_e, date_gest, action], function (err, results) {
            if (err) {
                console.log("Erreur lors de l insertion!!");
                return;
            }
            console.log("Gestion inserée !!");
        });
    };
    Gestionnaire.prototype.ModifierOrganisateur = function (nom_org, email, mdp) {
        var sql = "UPDATE organisateur SET nom = '" + this.nom_ges + "', email = '" + this.email_ges + "', mdp = '" + this.mdp_ges + "' WHERE nom = '" + this.nom_ges + "'";
        connection.query(sql, function (err, result) {
            if (err) {
                console.log("Erreur lors de la modification!!");
                return;
            }
            console.log("Organisateur Modifié !!");
        });
    };
    Gestionnaire.prototype.SupprimerOrganisateur = function () {
        var sql = "DELETE FROM gestionnaire WHERE nom = '" + this.nom_ges + "'";
        connection.query(sql, function (err, result) {
            if (err) {
                console.log("Erreur lors de la suppression!!");
                return;
            }
            console.log("Organisateur Supprimé !!");
        });
    };
    Gestionnaire.prototype.AjoutLieu = function (lieu_name, ville_name, salle_name, capacite) {
        var l1 = new Lieu_1.Lieu(lieu_name, ville_name, salle_name, capacite);
        var sql = "INSERT INTO lieu (nom_lieu,ville_lieu,salle,capacite) VALUES (?,?,?,?)";
        connection.query(sql, [lieu_name, ville_name, salle_name, capacite], function (err, result) {
            if (err) {
                console.log("Erreur lors de l ajout!!");
                return;
            }
            console.log("Lieu ajouté!!");
        });
    };
    return Gestionnaire;
}());
exports.Gestionnaire = Gestionnaire;
