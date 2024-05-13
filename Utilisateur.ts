// import { connect } from './connect.ts';

import * as mysql from 'mysql';

// Configuration de la connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gestevent'
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
    public num_util: number;
    public mdp_util: string;
    constructor(nom_u:string,email_u:string,num_u:number,mdp_u:string){
            // this.id_util=id_u;
            this.nom_util=nom_u;
            this.email_util=email_u;
            this.num_util=num_u;
            this.mdp_util=mdp_u;
    }
    // public get_id():number{
    //     return this.id_util;
    // }
    public CreerCompte(){
        // Requête d'insertion
        const query = 'INSERT INTO utilisateur (nom_util,email_util,num_util,mdp_util) VALUES (?,?,?,?)';
        
        // Exécution de la requête d'insertion
        connection.query(query, [this.nom_util,this.email_util,this.num_util,this.mdp_util], (err, results) => {
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
    public ModifierUtilisateur(nom_util:string,email_util:string, num_util:number,mdp_util:string){
        const sql = "UPDATE utilisateur SET nom_util = '"+nom_util+"', email_util = '"+email_util+"', num_util = '"+num_util+"', mdp_util = '"+mdp_util+"'  WHERE nom_util = '"+nom_util+"'";
        connection.query(sql, function (err, result) {
          if (err){
          console.log("Erreur lors de la modification!!");
          return;}
          console.log("utilisateur Modifié !!");
        });
      } 
}