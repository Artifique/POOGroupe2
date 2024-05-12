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
    console.log('Connecté à la base de données MySQL');
});
// Données à ajouter
var nouvelUtilisateur = {
    nom: 'Barry',
    email: 'mody@gmail.com',
};
// Requête SQL pour ajouter un utilisateur
// const sql = 'INSERT INTO utilisateurs SET ?';
var sql = 'SELECT * FROM utilisateur';
// Exécution de la requête SQL
connection.query(sql, nouvelUtilisateur, function (err, result) {
    if (err) {
        console.error('Erreur lors de l\'ajout de l\'utilisateur : ', err);
        return;
    }
    console.log(result);
});
// Fermer la connexion à la base de données après avoir terminé
connection.end();
