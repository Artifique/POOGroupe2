import * as mysql from 'mysql';
import { Avoirlieu } from './Avoirlieu';
import { Evenement } from './Evenement';
import { Typeevent } from './Typeevent';
import { Typeticket } from './Typeticket';
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





export class Organisateur {
    public nom_org: string;
    public email_org:string;
    public mdp_org: string;

    constructor(nom_org: string, email_org:string, mdp_org: string) {
        this.nom_org = nom_org;
        this.email_org = email_org;
        this.mdp_org = mdp_org;
    }
   
    

    // Modification du contenu d un evenement deja dans la base de donnee
    public ModifierEvent(titre:string,description:string,id_evenement:number):void{
        connection.query('UPDATE evenement SET  titre =?, description =? WHERE id_evenement =?', [titre, description, id_evenement], (err, result) => {
            if (err) {
                console.error('Erreur lors de la modification de l\'événement:', err);
                return ;
            }
            console.log('Événement modifié avec succès');
        });
    }

    public StockId_org():any{
        // const l1=new Lieu(lieu_name,ville_name,salle_name,capacite);
        const sql = "SELECT id_org FROM organisateur WHERE nom_org=?";
        connection.query(sql, [this.nom_org],function (err, result) {
          if (err){
          console.log("Erreur lors de la recherche!!");
          return;}
          const id_org=result;
          console.log(id_org);
        });
    }



};




