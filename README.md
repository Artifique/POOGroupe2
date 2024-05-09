# POOGroupe2
import * as mysql from 'mysql';

// Configuration de la connexion à la base de données MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'votre_utilisateur',
    password: 'votre_mot_de_passe',
    database: 'votre_base_de_données'
});

// Connexion à la base de données
connection.connect();

// Exécution d'une requête SQL
connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) throw error;
    console.log('Résultats:', results);
});

// Fermeture de la connexion à la base de données
connection.end();
