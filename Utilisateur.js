"use strict";
// import { connect } from './connect.ts';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utilisateur = void 0;
var mysql = require("mysql");
// Configuration de la connexion à la base de données MySQL
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestevent',
    port: 3310
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
    function Utilisateur(nom_u, email_u) {
        // this.id_util=id_u;
        this.nom_util = nom_u;
        this.email_util = email_u;
    }
    // public get_id():number{
    //     return this.id_util;
    // }
    Utilisateur.prototype.CreerCompte = function () {
        // Requête d'insertion
        var query = 'INSERT INTO utilisateur (nom_util,email_util) VALUES (?, ?)';
        // Exécution de la requête d'insertion
        connection.query(query, [this.nom_util, this.email_util], function (err, results) {
            if (err) {
                console.error('Erreur lors de l\'insertion de l\'événement :', err);
                return;
            }
            console.log('Utilisateur inséré avec succès !');
            console.log('ID de l\'utilisateur inséré :', results.insertId);
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
    return Utilisateur;
}());
exports.Utilisateur = Utilisateur;
