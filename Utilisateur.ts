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
    public nom_util:string;
    public email_util:string;
    public num_util: number;
    public mdp_util: string;
    constructor(nom_u:string,email_u:string,num_u:number,mdp_u:string){
            this.nom_util=nom_u;
            this.email_util=email_u;
            this.num_util=num_u;
            this.mdp_util=mdp_u;
    }
    
 // Ajout Utilisateur
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
            
        });

    }
    
    //  INSCRIPTION A UN EVENEMENT

    public reservation(titre:string,methode_paie:string):any{

      const query='(SELECT id_event FROM evenement WHERE titre="'+titre+'")';

      const query1='(SELECT id_util FROM utilisateur WHERE email_util="'+this.email_util+'")';
      const query2='INSERT into reservation (id_util,id_event,date_res,methode_paie) VALUES ('+query1+','+query+',?,?)';

      connection.query(query2, [new Date(),methode_paie], (err) => {
       if (err) {
           console.error('Erreur lors de la reservation de l\'id utilisateur :', err);
           return;
       }else{
        console.log('Reservation OK');
           return;
        }
           
   });

   }

    public RechercherEvent():any{
       const query='SELECT titre FROM evenement';
       connection.query(query, (err, results) => {
        if (err) {
            console.error('Erreur lors de la recherche de l\'événement :', err);
            return;
        }
        if (results.length === 0) {
            console.log('Aucun événement trouvé avec le nom',);
            return;
        }
        console.log(results);
       
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
      public SupUtlisateur(email: string):void{
        const sql = "DELETE FROM utilisateur WHERE email_util = '"+email+"'";
        connection.query(sql, function (err, result) {
          if (err){
          console.log("Erreur lors de la suppression!!");
          return;}
          console.log("Utilisateur Supprimé !!");
        }); 
      }

      public ListeEventforLieu(ville:string):void{

        const sql = 'SELECT DISTINCT evenement.titre,evenement.description,lieu.nom_lieu,lieu.capacite FROM evenement,lieu,avoir_lieu WHERE avoir_lieu.id_event=evenement.id_event AND avoir_lieu.id_lieu=lieu.id_lieu AND lieu.ville_lieu=?';
        connection.query(sql,[ville],function (err, result) {
          if (err){
          console.log("Erreur lors de la recherche !!");
          return;}
          console.log(result);
        });
      }




    }