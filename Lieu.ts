import * as mysql from 'mysql';

// Configuration de la connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gestevent',
  port:3310
});
console.log(typeof(connection));
// Connexion à la base de données
 connection.connect((err) => {
  if (err) {
    console.error('Erreur lors de la connexion à la base de données:', err);
    return;
  }
  console.log('Connecté à la base de données MySQL');
  return ;
 
});

// Fin de la connexion a la db 






export class Lieu {
    public nom_lieu: string;
    public ville_lieu: string;
    public salle: string;
    public capacite: number;
// CONSTRUCTEUR
    constructor(nom: string , ville_lieu: string , salle: string , capacite: number ) {
      
        this.nom_lieu = this.nom_lieu;
        this.ville_lieu = ville_lieu;
        this.salle = salle;
        this.capacite = capacite;
    }

   
}