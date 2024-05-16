import * as mysql from 'mysql';
import { Organisateur } from './Organisateur';
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
// Ajouter Oraganisateur
//  AjoutOrganisateur(nom_org: string, email_org: string, mdp_org:string): any {

//   let org1=new Organisateur(nom_org,email_org,mdp_org);
//   const sql = "INSERT INTO organisateur (nom_org, email_org, mdp_org) VALUES (?,?,?)";

//  connection.query(sql, [nom_org,email_org,mdp_org], (err, results)=> {
//   if (err){
//   console.log("Erreur lors de l insertion!!");
//   return;}

//   console.log("Oraganisateur Inseré !!");
//     // return org1
//  });
// }


 AjoutOrg(Org:Organisateur): any {
  const sql = "INSERT INTO organisateur (nom_org, email_org, mdp_org) VALUES (?,?,?)";
 connection.query(sql, [Org.nom_org,Org.email_org,Org.mdp_org], (err, results)=> {
  if (err){
  console.log("Erreur lors de l insertion!!");
  return;}
  console.log("Oraganisateur Inseré !!");
 });
}


// Modifier Organisateur
ModifierOrg(nomOrg: string, emailOrg: string, mdpOrg:string, email: string): any {

      
  const sql = "UPDATE organisateur SET nom_org = '"+nomOrg+"', email_org = '"+emailOrg+"', mdp_org = '"+mdpOrg+"' WHERE email_org = '"+email+"'";

connection.query(sql,  [nomOrg, emailOrg, mdpOrg, email], (err, results)=> {
  if (err){
  console.log("Erreur lors de l insertion!!");
  return;}
  const id=results.Id;
  
  console.log("Organisateur Modifier !!");

});
}








//  static AddGestion(id_g:number,id_e:number,date_gest:Date,action:string){

//     const sql = "INSERT INTO gestion (id_gest,id_event,date_gest,action) VALUES ('?', '?', '?','?)";
//     connection.query(sql,  [id_g,id_e,date_gest,action], (err, results)=> {
//       if (err){
//       console.log("Erreur lors de l insertion!!");
//       return;}
//       console.log("Gestion inserée !!");
//     });
    

//  } 
//  public ModifierOrganisateur(nom_org:string,email:string,mdp:number){
//   const sql = "UPDATE organisateur SET nom = '"+this.nom_ges+"', email = '"+this.email_ges+"', mdp = '"+this.mdp_ges+"' WHERE nom = '"+this.nom_ges+"'";
//   connection.query(sql, function (err, result) {
//     if (err){
//     console.log("Erreur lors de la modification!!");
//     return;}
//     console.log("Organisateur Modifié !!");
//   });
// }


//  public SupprimerOrganisateur(){
//     const sql = "DELETE FROM gestionnaire WHERE nom = '"+this.nom_ges+"'";
//     connection.query(sql, function (err, result) {
//       if (err){
//       console.log("Erreur lors de la suppression!!");
//       return;}
//       console.log("Organisateur Supprimé !!");
//     });
//  } 

  
//   }
}
  
 