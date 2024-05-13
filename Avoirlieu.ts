export class Avoirlieu{
    private id_event:number;
    private id_lieu:number;
    private date_event:Date;
    constructor(id_event:number,id_lieu:number,date_event:Date){
      
        this.id_event=id_event;
        this.id_lieu=id_lieu;
        this.date_event=date_event;
    }

    //Getters
    public getId_event():number{
        return this.id_event;
    }
    public getId_lieu():number{
        return this.id_lieu;
    }
    public getDate_event():Date{
        return this.date_event;
    }
    //Setters
    public setId_event(id_event:number):void{
        this.id_event=id_event;
    }
    public setId_lieu(id_lieu:number):void{
        this.id_lieu=id_lieu;
    }
    public setDate_event(date_event:Date):void{
        this.date_event=date_event;
    }

}