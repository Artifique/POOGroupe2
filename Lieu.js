"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lieu = void 0;
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
var Lieu = /** @class */ (function () {
    // CONSTRUCTEUR
    function Lieu(nom, ville_lieu, salle, capacite) {
        this.nom_lieu = this.nom_lieu;
        this.ville_lieu = ville_lieu;
        this.salle = salle;
        this.capacite = capacite;
    }
    return Lieu;
}());
exports.Lieu = Lieu;
