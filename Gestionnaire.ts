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
    const sql = "INSERT INTO gestionnaire (nom, email, mdp) VALUES ('"+this.nom+"', '"+this.email+"', '"+this.mdp+"')";
    connection.query(sql, function (err, result) {
      if (err){
      console.log("Erreur lors de l insertion!!");
      return;}
      console.log("Organisateur Inseré !!");
    });
 
 }
 public ModifierOrganisateur(){
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

    static trouverGestionnaireParNom(nomRecherche: string): Gestionnaire | undefined {
      return Gestionnaire.listeGestionnaires.find(g => g.nom === nomRecherche);
    }
  
    static trouverIndexGestionnaireParNom(nomRecherche: string): number | undefined {
      const index = Gestionnaire.listeGestionnaires.findIndex(g => g.nom === nomRecherche);
      if (index === -1) {
        return undefined;
      }
      return index;
    }
  
    static listeGestionnaires: Gestionnaire[] = [];
    static dernierIdGestionnaire: number = 0;
  }
  
  // Instanciation des classes Gestionnaire
  const gest1 = Gestionnaire.creerNouveauGestionnaire("Bouba", "bouba@gmail.com", "bouba");
  const gest2 = Gestionnaire.creerNouveauGestionnaire("Delegue", "delegue@gmail.com", "delegue");