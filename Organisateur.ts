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
import { EvenementPayant } from './Evenement';
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
    AjouterEventGratuit(titre:string,lieu:string,nbrplace:number,dateEvent:string,description:string):void{
        let evenement = new Evenement(titre,lieu,nbrplace,dateEvent,description);
        connection.query('INSERT INTO evenement (titre,lieu,nbrplace,dateEvent,description) VALUES (?,?,?,?,?)', [titre,lieu,nbrplace,dateEvent,description], (err, result) => {
            if (err) {
                console.error('Erreur lors de l\'ajout de l\'événement:', err);
                return ;
            }
            console.log('Événement ajouté avec succès');
        });
    }

    AjouterEventPayant(titre:string,lieu:string,nbrplace:number,dateEvent:string,prix: number,methodepaiement: string,description:string):void{
        let evenement = new EvenementPayant(titre,lieu,nbrplace,dateEvent,prix,methodepaiement,description);
        connection.query('INSERT INTO evenement (titre,lieu,nbrplace,dateEvent,prix,methode_paie,description) VALUES (?,?,?,?,?,?,?)', [titre,lieu,nbrplace,dateEvent,prix,methodepaiement,description], (err, result) => {
            if (err) {
                console.error('Erreur lors de l\'ajout de l\'événement:', err);
                return ;
            }
            console.log('Événement ajouté avec succès');
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




