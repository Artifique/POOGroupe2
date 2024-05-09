class lieu {
    // private id_lieu: number;
    // private nom: string;
    // private ville: string;
    // private num_sall: number;
    // private capacite: number;

    public id_lieu: number;
    public nom: string;
    public ville: string;
    public num_sall: number;
    public capacite: number;
// CONSTRUCTEUR
    constructor(id_lieu: number , nom: string , ville: string , num_sall: number , capacite: number ) {
        this.id_lieu = id_lieu;
        this.nom = nom;
        this.ville = ville;
        this.num_sall = num_sall;
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
const Lieu1 = new lieu (1,"CICB","Bamako",10,200);
Lieu1.nom = "Hotel de l'amitié"
console.log(Lieu1);
// const id1 = new lieu(1);
// console.log(id1);

// id1.setid_lieu(2);
// console.log(id1);