export class Gestion{
    private id_gest:number;
    private id_event:number;
    private date_gest:Date;
    private action: string;
    constructor(id_gest:number,id_event:number,date_gest:Date,action:string){
        this.id_gest=id_gest;
        this.id_event=id_event;
        this.date_gest=date_gest;
        this.action=action;
    }
    //Getters
    public getId_gest():number{
        return this.id_gest;
    }
    public getId_event():number{
        return this.id_event;
    }
    public getDate_gest():Date{
        return this.date_gest;
    }
    public getAction():string{
        return this.action;
    }
    //Setters
    public setId_gest(id_gest:number):void{
        this.id_gest=id_gest;
    }
    public setId_event(id_event:number):void{
        this.id_event=id_event;
    }
    public setDate_gest(date_gest:Date):void{
        this.date_gest=date_gest;
    }
    public setAction(action:string):void{
        this.action=action;
    }
}