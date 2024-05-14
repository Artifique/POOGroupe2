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






export class Evenement {
    
    // public id_lieu: number;
    // public id_org:number;
    public titre: string;
    public lieu: string;
    public nbrplace:number;
    public dateEvent:string;
    public description: string;
    

    constructor(titre: string,lieu: string,nbrplace:number,dateEvent:string, description: string) {

        this.titre =  titre;
        this.lieu =  lieu;
        this.nbrplace =  nbrplace;
        this.dateEvent= dateEvent;
        this.description =  description;
    }
    
};


export class EvenementPayant extends Evenement{
    public methodepaiement: string;
    public prix: number;
    

    constructor(titre: string,lieu:string,nbrplace:number,dateEvent:string,prix: number,methodepaiement: string,description: string) {
    super(titre,lieu,nbrplace,dateEvent,description);
        
        this.prix =  prix;
        this.methodepaiement =  methodepaiement;
    }
    
};

// export class EvenementGratuit extends Evenement{
//     // public methodepaiement: string;
//     // public prix: number;
    

//     constructor(titre: string,lieu:string,nbrplace:number,description: string) {
//       super(titre,lieu,nbrplace,description);
        
//         // this.prix =  prix;
//         // this.methodepaiement =  methodepaiement;
//     }
    
// };