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
        this.nom_util = nom_u;
        this.email_util = email_u;
        this.num_util = num_u;
        this.mdp_util = mdp_u;
    }
    // Ajout Utilisateur
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
        });
    };
    //  INSCRIPTION A UN EVENEMENT
    Utilisateur.prototype.reservation = function (titre, methode_paie) {
        var query = '(SELECT id_event FROM evenement WHERE titre="' + titre + '")';
        var query1 = '(SELECT id_util FROM utilisateur WHERE email_util="' + this.email_util + '")';
        var query2 = 'INSERT into reservation (id_util,id_event,date_res,methode_paie) VALUES (' + query1 + ',' + query + ',?,?)';
        connection.query(query2, [new Date(), methode_paie], function (err) {
            if (err) {
                console.error('Erreur lors de la reservation de l\'id utilisateur :', err);
                return;
            }
            else {
                console.log('Reservation OK');
                return;
            }
        });
    };
    Utilisateur.prototype.RechercherEvent = function () {
        var query = 'SELECT titre FROM evenement';
        connection.query(query, function (err, results) {
            if (err) {
                console.error('Erreur lors de la recherche de l\'événement :', err);
                return;
            }
            if (results.length === 0) {
                console.log('Aucun événement trouvé avec le nom');
                return;
            }
            console.log(results);
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
    Utilisateur.prototype.ListeEventforLieu = function (ville) {
        var sql = 'SELECT DISTINCT evenement.titre,evenement.description,lieu.nom_lieu,lieu.capacite FROM evenement,lieu,avoir_lieu WHERE avoir_lieu.id_event=evenement.id_event AND avoir_lieu.id_lieu=lieu.id_lieu AND lieu.ville_lieu=?';
        connection.query(sql, [ville], function (err, result) {
            if (err) {
                console.log("Erreur lors de la recherche !!");
                return;
            }
            console.log(result);
        });
    };
    return Utilisateur;
}());
exports.Utilisateur = Utilisateur;
