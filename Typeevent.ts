export class Typeevent{
    private nom_te:string;
    constructor(nom:string){
        this.nom_te=nom;
    }
   //Getter
    getNom_te():string{
        return this.nom_te;
    }
    //Setter
    setNom_te(nom:string):void{
        this.nom_te=nom;
    }
}