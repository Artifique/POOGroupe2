"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evenement = void 0;
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
var Evenement = /** @class */ (function () {
    function Evenement(titre, description) {
        this.titre = titre;
        this.description = description;
    }
    Evenement.prototype.PossederTicket = function (nom_tic, nbr_ticket, prix) {
        var query = '(SELECT id_event FROM evenement WHERE titre="' + this.titre + '" LIMIT 1)';
        var query1 = '(SELECT id_tic FROM type_ticket WHERE nom_tic="' + nom_tic + '" LIMIT 1)';
        var query2 = 'INSERT into posseder  VALUES (' + query + ',' + query1 + ',?,?)';
        connection.query(query2, [nbr_ticket, prix], function (err) {
            if (err) {
                console.error('Erreur lors de la creation des tickets :', err);
                return;
            }
            else {
                console.log('Tichet OK');
                return;
            }
        });
    };
    Evenement.prototype.A_Lieu = function (nom_lieu, date) {
        var sql = '(SELECT id_lieu FROM lieu WHERE nom_lieu="' + nom_lieu + '" LIMIT 1)';
        var sql0 = '(SELECT id_event FROM evenement WHERE titre="' + this.titre + '" LIMIT 1)';
        var sql1 = 'INSERT INTO avoir_lieu VALUES (' + sql0 + ',' + sql + ',?)';
        connection.query(sql1, [date], function (err, result) {
            if (err) {
                console.error('Erreur lors de l\' insertion:', err);
                return;
            }
            console.log('Insertion effectué avec succès ');
        });
    };
    ;
    return Evenement;
}());
exports.Evenement = Evenement;
