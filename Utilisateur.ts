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
            // console.log('ID de l\'utilisateur inséré :', results.insertId);
        });

    }
//  User ID
    public Stock_userid(email:string):any{
        const query='SELECT id_util FROM utilisateur WHERE email_util=?';
        connection.query(query, [email], (err, results) => {
         if (err) {
             console.error('Erreur lors de la recherche de l\'id utilisateur :', err);
             return;
         }
         if (results.length === 0) {
             console.log('L utilisateur n existe pas');
             return;
         }
         const user_id=results;
         console.log(user_id);
        
     });
 
     }

    //  Evenement ID
     public Stock_eventid(nom_event:string):any{
        const query='SELECT id_event FROM evenement WHERE titre=?';
        connection.query(query, [nom_event], (err, results) => {
         if (err) {
             console.error('Erreur lors de la recherche de l\'id utilisateur :', err);
             return;
         }
         if (results.length === 0) {
             console.log('L utilisateur n existe pas');
             return;
         }
         const event_id=results;
         console.log(event_id);
        
     });
 
     }


    //  INSCRIPTION A UN EVENEMENT

  //   public reservation(titre:string):any{

  //     const query='SELECT id_event FROM evenement WHERE titre='+titre+'';
  //     connection.query(query, (err, results) => {
  //       id_ev = results[0].id_event;
  //     })

  //     const query1='SELECT id_util FROM utilisateur WHERE email_util='+this.email_util+'';
  //     connection.query(query1, (err, results) => {
  //       var id_user = results;
  //     })


  //     const query2='INSERT into reservation (id_util,id_event,date_res) VALUES (id_ev ,?,?)';


  //     connection.query(query2, [id_ev,id_user, new Date()], (err, results) => {
  //      if (err) {
  //          console.error('Erreur lors de la reservation de l\'id utilisateur :', err);
  //          return;
  //      }
  //      if (results.length === 0) {
  //          console.log('Reservation OK');
  //          return;
  //      }
  //     //  const event_id=results;
  //     //  console.log(event_id);
      
  //  });

  //  }





  public reservation(titre: string): void {
    let id_ev: number;
    let id_user: number;

    // Requête pour obtenir l'ID de l'événement
    const query = 'SELECT id_event FROM evenement WHERE titre = ?';
    connection.query(query, [titre], (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération de l\'ID de l\'événement :', err);
            return;
        }
        if (results.length > 0) {
            id_ev = results[0].id_event;

            // Requête pour obtenir l'ID de l'utilisateur
            const query1 = 'SELECT id_util FROM utilisateur WHERE email_util = ?';
            connection.query(query1, [this.email_util], (err, results) => {
                if (err) {
                    console.error('Erreur lors de la récupération de l\'ID de l\'utilisateur :', err);
                    return;
                }
                if (results.length > 0) {
                    id_user = results[0].id_util;

                    // Requête pour insérer la réservation
                    const query2 = 'INSERT INTO reservation (id_util, id_event, date_res) VALUES (?, ?, ?)';
                    connection.query(query2, [id_user, id_ev, new Date()], (err, results) => {
                        if (err) {
                            console.error('Erreur lors de la réservation :', err);
                            return;
                        }
                        console.log('Réservation effectuée avec succès.');
                    });
                } else {
                    console.error('Utilisateur non trouvé.');
                }
            });
        } else {
            console.error('Événement non trouvé.');
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
    }