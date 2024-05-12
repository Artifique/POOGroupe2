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
  console.log('Connexion OK');
});




class Evenement {
    constructor(public titre: string, public date: string) {}
  }
  
  class Personnel {
    constructor(public nom: string) {}
  
    creerEvenement(titre: string, date: string): Evenement {
        const nouvelEvenement = { 
            nom: titre, 
            date: date, 
          };

            const sql = 'INSERT INTO evenements SET ?';
          
          // Exécution de la requête SQL
          connection.query(sql, nouvelEvenement, (result: any) => {
            console.log('Ajouter avec succes');
          });
          
          // Fermer la connexion à la base de données après avoir terminé
          connection.end();

      return new Evenement(titre, date);
    }
  }
  
  // Exemple d'utilisation
  const personne = new Personnel("Jean");
  const nouvelEvenement = personne.creerEvenement("SHOW", "2024-06-22");
  
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
