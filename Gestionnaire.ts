import * as mysql from 'mysql';
import { Organisateur } from './Organisateur';
import { Utilisateur } from './Utilisateur';
// Configuration de la connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gestevent',
  
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
  
 public AjoutGestionnaire(){
    const sql = "INSERT INTO gestionnaire (nom_ges, email_ges, mdp_ges) VALUES (?, ?, ?)";
    connection.query(sql,  [this.nom,this.email,this.mdp], (err, results)=> {
      if (err){
      console.log("Erreur lors de l insertion!!");
      return;}
      const id=results.Id;
     
      
      console.log("Gestionnaire Inseré !!");
    });
    
 }
 public SupGestionnaire(email: string):void{
    const sql = "DELETE FROM gestionnaire WHERE email_ges = '"+this.email+"'";
    connection.query(sql, function (err, result) {
      if (err){
      console.log("Erreur lors de la suppression!!");
      return;}
      console.log("Organisateur Supprimé !!");
    });
 }


 static AddGestion(id_g:number,id_e:number,date_gest:Date,action:string){

    const sql = "INSERT INTO gestion (id_gest,id_event,date_gest,action) VALUES (?, ?, ?,?)";
    connection.query(sql,  [id_g,id_e,date_gest,action], (err, results)=> {
      if (err){
      console.log("Erreur lors de l insertion!!");
      return;}
      console.log("Gestion inserée !!");
    });
    

 } 


 public ModifierGestionnaire(nom:string,email:string,mdp:string){
    const sql = "UPDATE gestionnaire SET nom_ges = '"+nom+"', email_ges = '"+email+"', mdp_ges = '"+mdp+"' WHERE nom_ges = '"+nom+"'";
    connection.query(sql, function (err, result) {
      if (err){
      console.log("Erreur lors de la modification!!");
      return;}
      console.log("Organisateur Modifié !!");
    });
 }
 AjoutOraganisateur(nom_org: string, email_org: string, mdp_org:string): any {

  let org1=new Organisateur(nom_org,email_org,mdp_org);
  const sql = "INSERT INTO organisateur (nom_org, email_org, mdp_org) VALUES (?,?,?)";

 connection.query(sql, [nom_org,email_org,mdp_org], (err, results)=> {
  if (err){
  console.log("Erreur lors de l insertion!!");
  return;}
  const id=results.Id;
  // Gestionnaire.AddGestion(id,)
  
  console.log("Oraganisateur Inseré !!");

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
  
 