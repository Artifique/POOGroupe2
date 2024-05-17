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


 AjoutOrg(Org:Organisateur): any {
  const sql = "INSERT INTO organisateur (nom_org, email_org, mdp_org) VALUES (?,?,?)";
 connection.query(sql, [Org.nom_org,Org.email_org,Org.mdp_org], (err, results)=> {
  if (err){
  console.log("Erreur lors de l insertion!!");
  return;}
  console.log("Oraganisateur Inseré !!");
 });
}
// Table gestion
 public Gestion(nom_event:string,date_gest:Date,action:string){

    const query='(SELECT id_ges FROM gestionnaire WHERE email_ges="'+this.email_ges+'" LIMIT 1)';
    const query1='(SELECT id_event FROM evenement WHERE titre ="'+nom_event+'" LIMIT 1)';
    const sql = 'INSERT INTO gestion (id_gest,id_event,date_gest,action) VALUES ('+query1+', '+query+',?,?)';
    connection.query(sql,[date_gest,action], (err, results)=> {
      if (err){
      console.log("Erreur lors de l insertion!!");
      return;}
      console.log("Gestion inserée !!");
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


 public SupprimerOrganisateur(){
    const sql = "DELETE FROM gestionnaire WHERE nom_ges = '"+this.nom_ges+"'";
    connection.query(sql, function (err, result) {
      if (err){
      console.log("Erreur lors de la suppression!!");
      return;}
      console.log("Organisateur Supprimé !!");
    });
 } 


public ListeUserforEvent(event:string):void{

  const sql = 'SELECT evenement.titre,utilisateur.nom_util,utilisateur.num_util FROM evenement,reservation,utilisateur WHERE reservation.id_event=evenement.id_event AND reservation.id_util=utilisateur.id_util AND evenement.titre=?';
  connection.query(sql,[event],function (err, result) {
    if (err){
    console.log("Erreur lors de la recherche !!");
    return;}
    console.log(result);
  });
}










  }

  
 