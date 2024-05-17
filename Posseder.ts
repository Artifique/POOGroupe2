export class Posseder{
    private id_event:number;
    private id_ti:number;
    private nbre_ticket:number;
    constructor(id_event:number,id_ti:number,nbre_ticket:number){
        this.id_event=id_event;
        this.id_ti=id_ti;
        this.nbre_ticket=nbre_ticket;
    }
    //Getters
    public getId_event():number{
        return this.id_event;
    }
    public getId_ti():number{
        return this.id_ti;
    }
    public getNbre_ticket():number{
        return this.nbre_ticket;
    }
    //Setters
    public setId_event(id_event:number):void{
        this.id_event=id_event;
    }
    public setId_ti(id_ti:number):void{
        this.id_ti=id_ti;
    }
    public setNbre_ticket(nbre_ticket:number):void{
        this.nbre_ticket=nbre_ticket;
    }
   
}