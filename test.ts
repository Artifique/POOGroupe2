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

    static ajoutUser( id_gest: number, nom_gest: string, email_gest:string, mdp_gest: string) {
        return new gestionnaire( id_gest, nom_gest, email_gest, mdp_gest)
    };

    static modifUser( id_gest: number, nom_gest: string, email_gest:string, mdp_gest: string): void {

    };

    static suppUser(id_gest: number): void {

    };
};

const newuser = new gestionnaire(1, "moussa", "moussa@gmail.com", "#0I?ZDSK?(-'-(èèDè");

console.log("ID de l'utilisateur:", newuser.id_gest);