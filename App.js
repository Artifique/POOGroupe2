// Importer le module MySQL
var mysql = require('mysql');
// Créer une connexion à la base de données
var connection = mysql.createConnection({
    host: 'localhost', // Adresse du serveur MySQL
    user: 'root', // Nom d'utilisateur MySQL
    password: '', // Mot de passe MySQL
    database: 'gestevent' // Nom de la base de données
});
// Établir la connexion à la base de données
connection.connect(function (err) {
    if (err) {
        console.error('Erreur de connexion à la base de données : ', err);
        return;
    }
    console.log('Connexion OK');
});
var Evenement = /** @class */ (function () {
    function Evenement(titre, date) {
        this.titre = titre;
        this.date = date;
    }
    return Evenement;
}());
var Personnel = /** @class */ (function () {
    function Personnel(nom) {
        this.nom = nom;
    }
    Personnel.prototype.creerEvenement = function (titre, date) {
        var nouvelEvenement = {
            nom: titre,
            date: date,
        };
        // Requête SQL pour ajouter un utilisateur
        var sql = 'INSERT INTO evenements SET ?';
        //   const sql = 'SELECT * FROM utilisateur';
        // Exécution de la requête SQL
        connection.query(sql, nouvelEvenement, function (result) {
            console.log('Ajouter avec succes');
        });
        // Fermer la connexion à la base de données après avoir terminé
        connection.end();
        return new Evenement(titre, date);
    };
    return Personnel;
}());
// Exemple d'utilisation
var personne = new Personnel("Jean");
var nouvelEvenement = personne.creerEvenement("SHOW", "2024-06-22");
console.log(nouvelEvenement);
// Données à ajouter
// const nouvelUtilisateur = { 
//   nom: 'Barry', 
//   email: 'mody@gmail.com', 
// };
// // Requête SQL pour ajouter un utilisateur
// // const sql = 'INSERT INTO utilisateurs SET ?';
// const sql = 'SELECT * FROM utilisateur';
// // Exécution de la requête SQL
// connection.query(sql, nouvelUtilisateur, (err: Error | null, result: any) => {
//   if (err) {
//     console.error('Erreur lors de l\'ajout de l\'utilisateur : ', err);
//     return;
//   }
//   console.log(result);
// });
// // Fermer la connexion à la base de données après avoir terminé
// connection.end();
