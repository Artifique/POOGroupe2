








class Evenement {
    
    public id_event: number;
    public id_lieu: number;
    public id_org:number;
    public titre: string;
    public description: string;

    constructor(id_event: number, id_lieu: number, id_org: number, titre: string, description: string) {


        this.id_event =  id_event;
        this.id_lieu =  id_lieu;
        this.id_org =  id_org;
        this.titre =  titre;
        this.description =  description;
    }
};