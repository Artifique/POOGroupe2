"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
var mysql = require("mysql");
// Configuration de la connexion à la base de données MySQL
exports.connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestevent',
    port: 3310
});
console.log(typeof (exports.connection));
// Connexion à la base de données
exports.connection.connect(function (err) {
    if (err) {
        console.error('Erreur lors de la connexion à la base de données:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
    return;
});
console.log(exports.connection);
// Exemple d'exécution d'une requête SQL
// connection.query('SELECT * FROM evenement', (err, rows) => {
//   if (err) {
//     console.error('Erreur lors de l\'exécution de la requête:', err);
//     return;
//   }
//   console.log('Résultat de la requête:', rows);
// });
// Fermeture de la connexion à la base de données
// connection.end((err) => {
//   if (err) {
//     console.error('Erreur lors de la fermeture de la connexion à la base de données:', err);
//     return;
//   }
//   console.log('Connexion à la base de données MySQL fermée');
// });
