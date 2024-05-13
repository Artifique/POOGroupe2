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

export class Gestionnaire {
    private nom: string;
    private email: string;
    private mdp: string;
  
    constructor(nom: string, email: string, mdp: string) {
      this.nom = nom;
      this.email = email;
      this.mdp = mdp; // Assurez-vous que le mot de passe est stocké de manière sécurisée (hashage)
    }
  
 public AjoutOrganisateur(){
    const sql = "INSERT INTO gestionnaire (nom_gest, email_gest, mdp_gest) VALUES ('?', '?', '?')";
    connection.query(sql,  [this.nom,this.email,this.mdp], (err, results)=> {
      if (err){
      console.log("Erreur lors de l insertion!!");
      return;}
      const id=results.Id;
      Gestionnaire.AddGestion(id,)
      
      console.log("Organisateur Inseré !!");
    });
    
 }
 public SupOrganisateur():void{
    const sql = "DELETE FROM gestionnaire WHERE nom = '"+this.nom+"'";
    connection.query(sql, function (err, result) {
      if (err){
      console.log("Erreur lors de la suppression!!");
      return;}
      console.log("Organisateur Supprimé !!");
    });
 }
 public ModifierOrganisateur(name:string,email,mdp,):void{
    const sql = "UPDATE gestionnaire SET nom = '"+this.nom+"', email = '"+this.email+"', mdp = '"+this.mdp+"' WHERE nom = '"+this.nom+"'";
    connection.query(sql, function (err, result) {
      if (err){
      console.log("Erreur lors de la modification!!");
      return;}
      console.log("Organisateur Modifié !!");
    });
 }

 static AddGestion(id_g:number,id_e:number,date_gest:Date,action:string){

    const sql = "INSERT INTO gestion (id_gest,id_event,date_gest,action) VALUES ('?', '?', '?','?)";
    connection.query(sql,  [id_g,id_e,date_gest,action], (err, results)=> {
      if (err){
      console.log("Erreur lors de l insertion!!");
      return;}
      console.log("Gestion inserée !!");
    });
    

 } 


 public ModifierOrganisateur(nom_org:string,email:string,mdp:number){
    const sql = "UPDATE organisateur SET nom = '"+this.nom+"', email = '"+this.email+"', mdp = '"+this.mdp+"' WHERE nom = '"+this.nom+"'";
    connection.query(sql, function (err, result) {
      if (err){
      console.log("Erreur lors de la modification!!");
      return;}
      console.log("Organisateur Modifié !!");
    });
 }
 public SupprimerOrganisateur(){
    const sql = "DELETE FROM gestionnaire WHERE nom = '"+this.nom+"'";
    connection.query(sql, function (err, result) {
      if (err){
      console.log("Erreur lors de la suppression!!");
      return;}
      console.log("Organisateur Supprimé !!");
    });
 } 

  
  }
  
 