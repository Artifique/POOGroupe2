"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utilisateur = void 0;
// import { connect } from './connect.ts';
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
var Utilisateur = /** @class */ (function () {
    function Utilisateur(nom_u, email_u, num_u, mdp_u) {
        // this.id_util=id_u;
        this.nom_util = nom_u;
        this.email_util = email_u;
        this.num_util = num_u;
        this.mdp_util = mdp_u;
    }
    // public get_id():number{
    //     return this.id_util;
    // }
    Utilisateur.prototype.CreerCompte = function () {
        // Requête d'insertion
        var query = 'INSERT INTO utilisateur (nom_util,email_util,num_util,mdp_util) VALUES (?,?,?,?)';
        // Exécution de la requête d'insertion
        connection.query(query, [this.nom_util, this.email_util, this.num_util, this.mdp_util], function (err, results) {
            if (err) {
                console.error('Erreur lors de l\'insertion de l\'événement :', err);
                return;
            }
            console.log('Utilisateur inséré avec succès !');
            // console.log('ID de l\'utilisateur inséré :', results.insertId);
        });
    };
    Utilisateur.prototype.Stock_userid = function (email) {
        var query = 'SELECT id_util FROM utilisateur WHERE email_util=?';
        connection.query(query, [email], function (err, results) {
            if (err) {
                console.error('Erreur lors de la recherche de l\'id utilisateur :', err);
                return;
            }
            if (results.length === 0) {
                console.log('L utilisateur n existe pas');
                return;
            }
            var user_id = results;
            console.log(user_id);
        });
    };
    Utilisateur.prototype.Stock_eventid = function (nom_event) {
        var query = 'SELECT id_event FROM evenement WHERE titre=?';
        connection.query(query, [nom_event], function (err, results) {
            if (err) {
                console.error('Erreur lors de la recherche de l\'id utilisateur :', err);
                return;
            }
            if (results.length === 0) {
                console.log('L utilisateur n existe pas');
                return;
            }
            var event_id = results;
            console.log(event_id);
        });
    };
    Utilisateur.prototype.RechercherEvent = function (nom_event) {
        var query = 'SELECT * FROM evenement WHERE titre=?';
        connection.query(query, [nom_event], function (err, results) {
            if (err) {
                console.error('Erreur lors de la recherche de l\'événement :', err);
                return;
            }
            if (results.length === 0) {
                console.log('Aucun événement trouvé avec le nom', nom_event);
                return;
            }
            console.log('Événement trouvé :', results[0]);
        });
    };
    Utilisateur.prototype.ModifierUtilisateur = function (nom_util, email_util, num_util, mdp_util) {
        var sql = "UPDATE utilisateur SET nom_util = '" + nom_util + "', email_util = '" + email_util + "', num_util = '" + num_util + "', mdp_util = '" + mdp_util + "'  WHERE nom_util = '" + nom_util + "'";
        connection.query(sql, function (err, result) {
            if (err) {
                console.log("Erreur lors de la modification!!");
                return;
            }
            console.log("utilisateur Modifié !!");
        });
    };
    Utilisateur.prototype.SupUtlisateur = function (email) {
        var sql = "DELETE FROM utilisateur WHERE email_util = '" + email + "'";
        connection.query(sql, function (err, result) {
            if (err) {
                console.log("Erreur lors de la suppression!!");
                return;
            }
            console.log("Utilisateur Supprimé !!");
        });
    };
    return Utilisateur;
}());
exports.Utilisateur = Utilisateur;
