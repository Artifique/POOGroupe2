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



import { Evenement } from './Evenement';
// import { EvenementPayant } from './Evenement';
import { Gestionnaire } from './Gestionnaire';

export class Organisateur {
    public nom_org: string;
    public email_org:string;
    public mdp_org: string;

    constructor(nom_org: string, email_org:string, mdp_org: string) {
        this.nom_org = nom_org;
        this.email_org = email_org;
        this.mdp_org = mdp_org;
    }



    //   Ajout d un evenement a la base de donnee en se servant de la classe Evenement

    AjoutEvent(Event:Evenement,type_event:string): any {

        const query='(SELECT id_org FROM organisateur WHERE email_org="'+this.email_org+'" LIMIT 1)';

        const query1='(SELECT id_te FROM type_event WHERE nom_te ="'+type_event+'" LIMIT 1)';


        const sql = 'INSERT INTO evenement (id_te, id_org, titre,description) VALUES ('+query1+','+query+',?,?)';
       connection.query(sql, [Event.titre,Event.description], (err, results)=> {
        console.log(err);
        if (err){
        console.log("Erreur lors de l insertion!!");
        return;}
        console.log("Evenement Inseré !!");
       });
      }
    
    // Ajout de lieu
    public AjoutLieu(nom_lieu:string,ville_lieu:string,salle:number,capacite:number):any{

        const query2='INSERT into lieu (nom_lieu,ville_lieu,salle,capacite) VALUES (?,?,?,?)';
  
        connection.query(query2, [nom_lieu,ville_lieu,salle,capacite], (err) => {
         if (err) {
             console.error('Erreur lors de l ajout du lieu:', err);
             return;
         }else{
          console.log('Lieu ajouter');
             return;
          }
             
     });
  
     }
    


    // Modification du contenu d un evenement deja dans la base de donnee
    ModifierEvent(titre:string,description:string,id_evenement:number):void{
        connection.query('UPDATE evenement SET  titre =?, description =? WHERE id_evenement =?', [titre, description, id_evenement], (err, result) => {
            if (err) {
                console.error('Erreur lors de la modification de l\'événement:', err);
                return ;
            }
            console.log('Événement modifié avec succès');
        });
    }

};




