export class Typeticket{
    private nom_ti:string;
    constructor(nom:string){
        this.nom_ti=nom;
    }
    //Getter
    getnom_ti():string{
        return this.nom_ti;
    }
    //Setter
    setnom_ti(nom:string){
        this.nom_ti=nom;
    }
}