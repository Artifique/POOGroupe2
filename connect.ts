import * as mysql from 'mysql';

export function connect(): any {
  // Créer une connexion à la base de données en spécifiant le port
  const connection = mysql.createConnection({
      host: 'localhost',
      user: 'votre_utilisateur',
      password: 'votre_mot_de_passe',
      database: 'votre_base_de_donnees',
      port: 3306 // Spécifiez le port ici
  });

  // Connectez-vous à la base de données
  connection.connect((err) => {
      if (err) {
          console.error('Erreur lors de la connexion à la base de données :', err);
          return;
      }
      console.log('Connexion à la base de données réussie !');
  });

  // Retourner l'objet de connexion
  return connection;
}