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

class gestionnaire {
    

    public id_gest: number;
    public nom_gest: string;
    public email_gest:string;
    public mdp_gest: string;

    constructor(id_gest: number, nom_gest: string, email_gest:string, mdp_gest: string) {
        this.id_gest = id_gest;
        this.nom_gest = nom_gest;
        this.email_gest = email_gest;
        this.mdp_gest = mdp_gest;
    }

    static ajoutorg( id_gest: number, nom_gest: string, email_gest:string, mdp_gest: string) {
        return new gestionnaire( id_gest, nom_gest, email_gest, mdp_gest)
    };


    static modiforg( id_gest: number, nom_gest: string, email_gest:string, mdp_gest: string): void {

    };

    static supporg(id_gest: number): void {

    };

    static addevent( id_event: number, id_lieu: number, id_org: number, titre: string, description: string) {
        return new evenement(id_event, id_lieu, id_org, titre, description)
    };

    static modifevent( id_event: number, id_lieu: number, id_org: number, titre: string, description: string ): void {

    };

    static suppevent(id_event: number): void {

    };
};

const neworg = gestionnaire.ajoutorg(2, "moussa", "moussa@gmail.com", "#0I?ZDSK?(-'-(èèDè");
const new_event = gestionnaire.addevent( 1, 1, 1, "Festival", "hebfregr gf,ndgbrjkthvr eiudkjvhr: string");
console.log("ID de l'utilisateur:", neworg);
console.log("ID de l'evenement:", new_event)