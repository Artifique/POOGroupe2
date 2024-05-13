"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
var mysql = require("mysql");
// Configuration de la connexion à la base de données MySQL
// export const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'gestevent',
//   port:3310
// });
// console.log(typeof(connection));
// Connexion à la base de données
//  connection.connect((err) => {
//   if (err) {
//     console.error('Erreur lors de la connexion à la base de données:', err);
//     return;
//   }
//   console.log('Connecté à la base de données MySQL');
//   return ;
// });
// console.log(connection);
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
function connect() {
    // Créer une connexion à la base de données en spécifiant le port
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'votre_utilisateur',
        password: 'votre_mot_de_passe',
        database: 'votre_base_de_donnees',
        port: 3306 // Spécifiez le port ici
    });
    // Connectez-vous à la base de données
    connection.connect(function (err) {
        if (err) {
            console.error('Erreur lors de la connexion à la base de données :', err);
            return;
        }
        console.log('Connexion à la base de données réussie !');
    });
    // Retourner l'objet de connexion
    return connection;
}
exports.connect = connect;
