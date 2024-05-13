"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evenement = void 0;
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
var Evenement = /** @class */ (function () {
    function Evenement(id_lieu, id_org, titre, description) {
        this.id_lieu = id_lieu;
        this.id_org = id_org;
        this.titre = titre;
        this.description = description;
    }
    return Evenement;
}());
exports.Evenement = Evenement;
;
