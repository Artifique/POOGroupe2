// import { connect } from './connect.ts';

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

export class Utilisateur{
    // private id_util:number;
    public nom_util:string;
    public email_util:string;
    constructor(nom_u:string,email_u:string){
            // this.id_util=id_u;
            this.nom_util=nom_u;
            this.email_util=email_u;
    }
    // public get_id():number{
    //     return this.id_util;
    // }
    public CreerCompte(){
        // Requête d'insertion
        const query = 'INSERT INTO utilisateur (nom_util,email_util) VALUES (?, ?)';
        
        // Exécution de la requête d'insertion
        connection.query(query, [this.nom_util,this.email_util], (err, results) => {
            if (err) {
                console.error('Erreur lors de l\'insertion de l\'événement :', err);
                return;
            }
            console.log('Utilisateur inséré avec succès !');
            console.log('ID de l\'utilisateur inséré :', results.insertId);
        });

    }
    public RechercherEvent(nom_event:string):any{
       const query='SELECT * FROM evenement WHERE titre=?';
       connection.query(query, [nom_event], (err, results) => {
        if (err) {
            console.error('Erreur lors de la recherche de l\'événement :', err);
            return;
        }
        if (results.length === 0) {
            console.log('Aucun événement trouvé avec le nom', nom_event);
            return;
        }
        console.log('Événement trouvé :', results[0]);
    });

    }

}