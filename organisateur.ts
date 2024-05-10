class evenement {
    
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


class organisateur {
    

    public id_org: number;
    public nom_org: string;
    public email_org:string;
    public mdp_org: string;

    constructor(id_org: number, nom_org: string, email_org:string, mdp_org: string) {
        this.id_org = id_org;
        this.nom_org = nom_org;
        this.email_org = email_org;
        this.mdp_org = mdp_org;
    }

    static addevent( id_event: number, id_lieu: number, id_org: number, titre: string, description: string) {
        return new evenement(id_event, id_lieu, id_org, titre, description)
    };

    static modifevent( id_event: number, id_lieu: number, id_org: number, titre: string, description: string ): void {

    };

};




const new_event = organisateur.addevent( 1, 13, 33, "Eventify", "AdiaTandia");
console.log("ID evenement:", new_event)




    

    