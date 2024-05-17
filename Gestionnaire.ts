import * as mysql from 'mysql';
import { Organisateur } from './Organisateur';
import { Lieu } from './Lieu';
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

export class Gestionnaire {
    private nom_ges: string;
    private email_ges: string;
    private mdp_ges: string;
  
    constructor(nom: string, email: string, mdp: string) {
      this.nom_ges = nom;
      this.email_ges = email;
      this.mdp_ges = mdp; // Assurez-vous que le mot de passe est stocké de manière sécurisée (hashage)
    }
  
 public AjoutGestionnaire(){
    const sql = "INSERT INTO gestionnaire (nom_ges, email_ges, mdp_ges) VALUES (?, ?, ?)";
    connection.query(sql,  [this.nom_ges,this.email_ges,this.mdp_ges], (err, results)=> {
      if (err){
      console.log("Erreur lors de l insertion!!");
      return;}
      // const id=results.Id;
    
      
      console.log("Gestionnaire Inseré !!");
    }); 
 }

 public ModifierGestionnaire(nom:string,email:string,mdp:string):void{
  const sql = "UPDATE gestionnaire SET nom_ges = '"+nom+"', email_ges = '"+email+"', mdp_ges = '"+mdp+"' WHERE email_ges = '"+email+"'";
  connection.query(sql, function (err, result) {
    if (err){
    console.log("Erreur lors de la modification!!");
    return;}
    console.log("Organisateur Modifié !!");
  });
}



 public SupGestionnaire(mail:string):void{
    const sql = "DELETE FROM gestionnaire WHERE email_ges = '"+this.email_ges+"'";
    connection.query(sql, function (err, result) {
      if (err){
      console.log("Erreur lors de la suppression!!");
      return;}
      console.log("Organisateur Supprimé !!");
    });
 }

 AjoutOraganisateur(nom_org: string, email_org: string, mdp_org:string): any {

  let org1=new Organisateur(nom_org,email_org,mdp_org);
  const sql = "INSERT INTO organisateur (nom_org, email_org, mdp_org) VALUES (?,?,?)";

 connection.query(sql, [nom_org,email_org,mdp_org], (err, results)=> {
  if (err){
  console.log("Erreur lors de l insertion!!");
  return;}

  console.log("Oraganisateur Inseré !!");

 });

 
}









 public AddGestion(date_gest:Date,action:string){
  

    const sql = "INSERT INTO gestion (id_gest,id_event,date_gest,action) VALUES ('?', '?', '?','?)";
    connection.query(sql,  [id_g,id_e,date_gest,action], (err, results)=> {
      if (err){
      console.log("Erreur lors de l insertion!!");
      return;}
      console.log("Gestion inserée !!");
    });
    

 } 
 public ModifierOrganisateur(nom_org:string,email:string,mdp:number){
  const sql = "UPDATE organisateur SET nom = '"+this.nom_ges+"', email = '"+this.email_ges+"', mdp = '"+this.mdp_ges+"' WHERE nom = '"+this.nom_ges+"'";
  connection.query(sql, function (err, result) {
    if (err){
    console.log("Erreur lors de la modification!!");
    return;}
    console.log("Organisateur Modifié !!");
  });
}


 public SupprimerOrganisateur(){
    const sql = "DELETE FROM gestionnaire WHERE nom = '"+this.nom_ges+"'";
    connection.query(sql, function (err, result) {
      if (err){
      console.log("Erreur lors de la suppression!!");
      return;}
      console.log("Organisateur Supprimé !!");
    });
 } 

 public AjoutLieu(lieu_name:string,ville_name:string,salle_name:string,capacite:number){
  const l1=new Lieu(lieu_name,ville_name,salle_name,capacite);
  const sql = "INSERT INTO lieu (nom_lieu,ville_lieu,salle,capacite) VALUES (?,?,?,?)";
  connection.query(sql, [lieu_name,ville_name,salle_name,capacite],function (err, result) {
    if (err){
    console.log("Erreur lors de l ajout!!");
    return;}
    console.log("Lieu ajouté!!");
  });
} 



// Test

// public StockId_lieu(nom_lieu:string):any{
//   // const l1=new Lieu(lieu_name,ville_name,salle_name,capacite);
//   const sql = "SELECT id_lieu FROM lieu WHERE nom_lieu=?";
//   connection.query(sql, [nom_lieu],function (err, result) {
//     if (err){
//     console.log("Erreur lors de la recherche!!");
//     return;}
//     const id_lieu=result.id_lieu;
//     console.log(id_lieu);
//   });
// }

  
  }
  
 