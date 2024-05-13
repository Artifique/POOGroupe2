export class Reserver{
    private id_event:number;
    private id_util:number;
    private methode_paie: string;
    constructor(id_event:number,id_util:number,methode_paie:string){
        this.id_event=id_event;
        this.id_util=id_util;
        this.methode_paie=methode_paie;
    }
    //Getter
    public getId_event():number{
        return this.id_event;
    }
    public getId_util():number{
        return this.id_util;
    }
    public getMethode_paie():string{
        return this.methode_paie;
    }
    //Setter
    public setId_event(id_event:number){
        this.id_event=id_event;
    }
    public setId_util(id_util:number){
        this.id_util=id_util;
    }
    public setMethode_paie(methode_paie:string){
        this.methode_paie=methode_paie;
    }
}