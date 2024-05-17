"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gestionnaire = void 0;
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
    Gestionnaire.prototype.AjoutOrg = function (Org) {
        var sql = "INSERT INTO organisateur (nom_org, email_org, mdp_org) VALUES (?,?,?)";
        connection.query(sql, [Org.nom_org, Org.email_org, Org.mdp_org], function (err, results) {
            if (err) {
                console.log("Erreur lors de l insertion!!");
                return;
            }
            console.log("Oraganisateur Inseré !!");
        });
    };
    // Table gestion
    Gestionnaire.prototype.Gestion = function (nom_event, date_gest, action) {
        var query = '(SELECT id_ges FROM gestionnaire WHERE email_ges="' + this.email_ges + '" LIMIT 1)';
        var query1 = '(SELECT id_event FROM evenement WHERE titre ="' + nom_event + '" LIMIT 1)';
        var sql = 'INSERT INTO gestion (id_gest,id_event,date_gest,action) VALUES (' + query1 + ', ' + query + ',?,?)';
        connection.query(sql, [date_gest, action], function (err, results) {
            if (err) {
                console.log("Erreur lors de l insertion!!");
                return;
            }
            console.log("Gestion inserée !!");
        });
    };
    // Modifier Organisateur
    Gestionnaire.prototype.ModifierOrg = function (nomOrg, emailOrg, mdpOrg, email) {
        var sql = "UPDATE organisateur SET nom_org = '" + nomOrg + "', email_org = '" + emailOrg + "', mdp_org = '" + mdpOrg + "' WHERE email_org = '" + email + "'";
        connection.query(sql, [nomOrg, emailOrg, mdpOrg, email], function (err, results) {
            if (err) {
                console.log("Erreur lors de l insertion!!");
                return;
            }
            var id = results.Id;
            console.log("Organisateur Modifier !!");
        });
    };
    Gestionnaire.prototype.SupprimerOrganisateur = function () {
        var sql = "DELETE FROM gestionnaire WHERE nom_ges = '" + this.nom_ges + "'";
        connection.query(sql, function (err, result) {
            if (err) {
                console.log("Erreur lors de la suppression!!");
                return;
            }
            console.log("Organisateur Supprimé !!");
        });
    };
    Gestionnaire.prototype.ListeUserforEvent = function (event) {
        var sql = 'SELECT evenement.titre,utilisateur.nom_util,utilisateur.num_util FROM evenement,reservation,utilisateur WHERE reservation.id_event=evenement.id_event AND reservation.id_util=utilisateur.id_util AND evenement.titre=?';
        connection.query(sql, [event], function (err, result) {
            if (err) {
                console.log("Erreur lors de la recherche !!");
                return;
            }
            console.log(result);
        });
    };
    return Gestionnaire;
}());
exports.Gestionnaire = Gestionnaire;
