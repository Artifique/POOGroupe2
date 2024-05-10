var Utilisateur = /** @class */ (function () {
    function Utilisateur(id_util, nom_util, email_util, num_util, mdp_util) {
        this.id_util = id_util;
        this.nom_util = nom_util;
        this.email_util = email_util;
        this.num_util = num_util;
        this.mdp_util = mdp_util;
    }
    Utilisateur.prototype.getId_util = function () {
        return this.id_util;
    };
    Utilisateur.creerCompteUtilisateur = function (nom, mail, num, mdp) {
        var nouvelUtilisateur = new Utilisateur(Utilisateur.dernierIdUtilisateur + 1, nom, mail, num, mdp);
        Utilisateur.listeUtilisateurs.push(nouvelUtilisateur);
        console.log(this.listeUtilisateurs);
        Utilisateur.dernierIdUtilisateur++;
        return nouvelUtilisateur;
    };
    Utilisateur.listeUtilisateurs = [];
    Utilisateur.dernierIdUtilisateur = 0;
    return Utilisateur;
}());
// classe  Evenement 
var Evenement = /** @class */ (function () {
    function Evenement(id_event, id_org, id_te, titre, description) {
        this.id_event = id_event;
        this.id_org = id_org;
        this.id_te = id_te;
        this.titre = titre;
        this.description = description;
    }
    Evenement.prototype.getId_event = function () {
        return this.id_event;
    };
    return Evenement;
}());
var Organisateur = /** @class */ (function () {
    function Organisateur(id_org, nom_org, email_org, mdp_org) {
        this.id_org = id_org;
        this.nom_org = nom_org;
        this.email_org = email_org;
        this.mdp_org = mdp_org;
    }
    Organisateur.prototype.getId_org = function () {
        return this.id_org;
    };
    Organisateur.prototype.AjouterEvent = function () {
    };
    return Organisateur;
}());
var TypeEvent = /** @class */ (function () {
    function TypeEvent(id_te, nom_te) {
        this.id_te = id_te;
        this.nom_te = nom_te;
    }
    return TypeEvent;
}());
//  Instanciation des classes 
var org1 = new Organisateur(1, "Africa Scene", "africa@gmail.com", "africa");
var org2 = new Organisateur(2, "Orange Mali", "orange@gmail.com", "oml");
var org3 = new Organisateur(1, "ChakaBa Diabaté", "chaka@gmail.com", "chaka");
var user1 = new Utilisateur(1, "Bouba", "bouba@gmail.com", 64890763, "bouba");
Utilisateur.creerCompteUtilisateur("Bouba", "bouba@gmail.com", 64890763, "bouba");
var user2 = new Utilisateur(2, "Delegue", "delegue@gmail.com", 74890763, "delegue");
Utilisateur.creerCompteUtilisateur("Delegue", "delegue@gmail.com", 74890763, "delegue");
// const user3 =new Utilisateur(3,"Cheick","cheick@gmail.com",64470763,"cheick");
// const typeE1= new TypeEvent(1,"Concert Payant");
// const typeE2= new TypeEvent(2,"Concert Gratuit");
// const typeE3= new TypeEvent(1,"Concert Payant");
// const event1= new Evenement(1,1,1,"Concert de Bouba","Rap,clash,Rnb");
// const event2= new Evenement(1,1,1,"Concert de Lil Zed","Semi Live,tout");
// const event3= new Evenement(1,1,1,"Concert de 2BTO","Clash,AfroTrap");
// Creation de la liste qui nous servira de base de donnee
var listeOrg = [];
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
