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






export class Lieu {
    public nom_lieu: string;
    public ville_lieu: string;
    public salle: string;
    public capacite: number;
// CONSTRUCTEUR
    constructor(nom: string , ville_lieu: string , salle: string , capacite: number ) {
      
        this.nom_lieu = this.nom_lieu;
        this.ville_lieu = ville_lieu;
        this.salle = salle;
        this.capacite = capacite;
    }

    // Getter et Setter

    // public getid_lieu(){
    //     return this.id_lieu;
    // }
    
    // public setid_lieu(id_lieu : number) {
    //     this.id_lieu = id_lieu;
    // }
    // // ========================================================
    // public getville(){
    //     return this.id_lieu;
    // }
    
    // public setville(ville : string) {
    //     this.ville = ville;
    // }
    // // =============================================================
    // public getNom(){
    //     return this.id_lieu;
    // }
    
    // public setNom(id_lieu : number) {
    //     this.id_lieu = id_lieu;
    // }
    // // =============================================================
    // public getNum_sall(){
    //     return this.num_sall;
    // }
    
    // public setNum_sall(num_sall : number) {
    //     this.num_sall = num_sall;
    // }
    // // =============================================================
    // public getCapacite(){
    //     return this.capacite;
    // }
    
    // public setCapacite(capacite : number) {
    //     this.capacite = capacite;
    // }
    // =============================================================
}