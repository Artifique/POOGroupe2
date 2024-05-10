
class Utilisateur{
    private id_util:number;
    public nom_util:string;
    public email_util:string;
    public num_util:number;
    private mdp_util:string;
    constructor(id_util:number, nom_util:string, email_util:string, num_util:number, mdp_util:string) {
        this.id_util = id_util;
        this.nom_util = nom_util;
        this.email_util = email_util;
        this.num_util = num_util;
        this.mdp_util = mdp_util;
    
}
    public getId_util():number{
        return this.id_util;
    }
    static listeUtilisateurs: Utilisateur[] = [];
  static dernierIdUtilisateur: number = 0;

  static creerCompteUtilisateur(nom: string, mail: string, num: number,mdp:string): Utilisateur {
    const nouvelUtilisateur = new Utilisateur(Utilisateur.dernierIdUtilisateur + 1, nom, mail,num,mdp);
    Utilisateur.listeUtilisateurs.push(nouvelUtilisateur);
    console.log(this.listeUtilisateurs);
    Utilisateur.dernierIdUtilisateur++;
    return nouvelUtilisateur;
  }
  static trouverUtilisateurParNom(listeUtilisateurs: Utilisateur[], nomRecherche: string): Utilisateur | undefined {
    return listeUtilisateurs.find(u => u.nom_util === nomRecherche);
  }

  static trouverIndexUtilisateurParNom(listeUtilisateurs: Utilisateur[], nomRecherche: string): number {
    return listeUtilisateurs.findIndex(u => u.nom_util === nomRecherche);

  }
}



// classe  Evenement 

class Evenement{
    private id_event:number;
    private id_org:number;
    private id_te:number;
    private titre:string;
    private description:string;
    constructor(id_event:number,id_org:number,id_te:number,titre:string,description:string){
        this.id_event=id_event;
        this.id_org=id_org;
        this.id_te=id_te;
        this.titre=titre;
        this.description=description;
    }
    public getId_event():number{
        return this.id_event;
    }
    
}

class Organisateur{
    private id_org:number;
    private nom_org:string;
    private email_org:string;
    private mdp_org:string;
    constructor(id_org:number,nom_org:string,email_org:string,mdp_org:string){
        this.id_org=id_org;
        this.nom_org=nom_org;
        this.email_org=email_org;
        this.mdp_org=mdp_org;
    } 
    public getId_org():number{
        return this.id_org;
    }
    public AjouterEvent(){

    }
}


class TypeEvent{
    private id_te:number;
    private nom_te:string;
    constructor(id_te:number,nom_te:string){
        this.id_te=id_te;
        this.nom_te=nom_te;
    }
}


//  Instanciation des classes 
const org1 =new Organisateur(1,"Africa Scene","africa@gmail.com","africa");
const org2 =new Organisateur(2,"Orange Mali","orange@gmail.com","oml");
const org3 =new Organisateur(1,"ChakaBa Diabaté","chaka@gmail.com","chaka");

const user1 =new Utilisateur(1,"Bouba","bouba@gmail.com",64890763,"bouba");
Utilisateur.creerCompteUtilisateur("Bouba","bouba@gmail.com",64890763,"bouba");



const user2 =new Utilisateur(2,"Delegue","delegue@gmail.com",74890763,"delegue");
Utilisateur.creerCompteUtilisateur("Delegue","delegue@gmail.com",74890763,"delegue");

// const user3 =new Utilisateur(3,"Cheick","cheick@gmail.com",64470763,"cheick");

// const typeE1= new TypeEvent(1,"Concert Payant");
// const typeE2= new TypeEvent(2,"Concert Gratuit");
// const typeE3= new TypeEvent(1,"Concert Payant");


// const event1= new Evenement(1,1,1,"Concert de Bouba","Rap,clash,Rnb");
// const event2= new Evenement(1,1,1,"Concert de Lil Zed","Semi Live,tout");
// const event3= new Evenement(1,1,1,"Concert de 2BTO","Clash,AfroTrap");

// Creation de la liste qui nous servira de base de donnee

var listeOrg:Organisateur[]=[];
listeOrg.push(org1);
listeOrg.push(org2);
listeOrg.push(org3);

// var listeUser:Utilisateur[]=[];
// Utilisateur.CreerCompte(user1);
// listeUser.push(user1);
// console.log(listeUser);
// Utilisateur.CreerCompte(user2);
// listeUser.push(user2);
// console.log(listeUser);
// listeUser.push(user2);
// listeUser.push(user3);

// var listeTypeE:TypeEvent[]=[];
// listeTypeE.push(typeE1);
// listeTypeE.push(typeE2);
// listeTypeE.push(typeE3);

// Recherche en fonction des attributs
// const utilisateurTrouve = listeUser.find(u => u.nom_util === 'Bouba');
// console.log(utilisateurTrouve);
// const evenementTrouve = listeEvenements.find(e => e.titre === 'Conférence');

// Suppression d'un objet d'une classe
// const indexUtilisateur = listeUser.findIndex(u => u.nom_util === 'Delegue');
// if (indexUtilisateur !== -1) {
//   listeUser.splice(indexUtilisateur, 1);
// }