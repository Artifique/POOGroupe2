// Importer le module MySQL
const mysql = require('mysql');

// Créer une connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost', // Adresse du serveur MySQL
  user: 'root', // Nom d'utilisateur MySQL
  password: '', // Mot de passe MySQL
  database: 'gestevent' // Nom de la base de données
});

// Établir la connexion à la base de données
connection.connect((err: Error) => {
  if (err) {
    console.error('Erreur de connexion à la base de données : ', err);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

// Données à ajouter
const nouvelUtilisateur = { 
  nom: 'Barry', 
  email: 'mody@gmail.com', 
};

// Requête SQL pour ajouter un utilisateur
// const sql = 'INSERT INTO utilisateurs SET ?';
const sql = 'SELECT * FROM utilisateur';

// Exécution de la requête SQL
connection.query(sql, nouvelUtilisateur, (err: Error | null, result: any) => {
  if (err) {
    console.error('Erreur lors de l\'ajout de l\'utilisateur : ', err);
    return;
  }
  console.log(result);
});

// Fermer la connexion à la base de données après avoir terminé
connection.end();
