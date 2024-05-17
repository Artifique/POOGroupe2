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
    public titre: string;
    public description: string;
    

    constructor(titre:string, description: string) {
        this.titre =  titre;
        this.description =  description;
    }


    public PossederTicket(nom_tic:string,nbr_ticket:number,prix:number):any{

      const query='(SELECT id_event FROM evenement WHERE titre="'+this.titre+'" LIMIT 1)';
  
      const query1='(SELECT id_tic FROM type_ticket WHERE nom_tic="'+nom_tic+'" LIMIT 1)';
      
      const query2='INSERT into posseder  VALUES ('+query+','+query1+',?,?)';
  
      connection.query(query2, [nbr_ticket, prix], (err) => {
       if (err) {
           console.error('Erreur lors de la creation des tickets :', err);
           return;
       }else{
        console.log('Tichet OK');
           return;
        }
           
   });
  
   }
    
  

   public A_Lieu(nom_lieu:string,date:Date):void{
    const sql = '(SELECT id_lieu FROM lieu WHERE nom_lieu="'+nom_lieu+'" LIMIT 1)';
    const sql0 = '(SELECT id_event FROM evenement WHERE titre="'+this.titre+'" LIMIT 1)';
    const sql1 = 'INSERT INTO avoir_lieu VALUES ('+sql0+','+sql+',?)';

    connection.query(sql1, [date], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\' insertion:', err);
            return ;
        }
        console.log('Insertion effectué avec succès ');
    });    

};

}
