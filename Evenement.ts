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








export class Evenement {
    
    public id_lieu: number;
    public id_org:number;
    public titre: string;
    public description: string;

    constructor(id_lieu: number, id_org: number, titre: string, description: string) {


        this.id_lieu =  id_lieu;
        this.id_org =  id_org;
        this.titre =  titre;
        this.description =  description;
    }
    
};