"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Evenement_1 = require("./Evenement");
var Organisateur_1 = require("./Organisateur");
var Gestionnaire_1 = require("./Gestionnaire");
// Test en suivant le worflow 
// Ajout d'un nouveau personnel(gestionnaire)
var Gest1 = new Gestionnaire_1.Gestionnaire("Adama Semin", "sermin@gmail.com", "sermin");
// Gest1.AjoutGestionnaire();
// Ajout d'un nouveau organisateur par ce gestionnaire
var Org1 = new Organisateur_1.Organisateur("BoubProd", "prod@gmail.com", "pro123ED");
// Gest1.AjoutOrg(Org1);
// Creation d'un evenement par ce personnel
var Event1 = new Evenement_1.Evenement("Maxi Tours School", "Divertissement,sport, competition de rap et slam");
Org1.AjoutEvent(Event1, "Payant");
// Event1.PossederTicket("VIP",3,2500);
// Event1.PossederTicket("Pelouse",2,1500);
// Event1.PossederTicket("Gradin",3,100);
// const date1=new Date("2024-01-21");
// Event1.A_Lieu("Place du cinquantenaire",date1);
// Inscription d un utilisateur
// let user1 = new Utilisateur('Aboudou','oudo@gmail',65465689,"azerty");
// user1.ListeEventforLieu("Bamako");
// // user2.CreerCompte();
// user2.RechercherEvent('Concert de Gaspi');
// var Gest_1 = new Gestionnaire("MAIGA", "maiga@gmail.com","blablabla");
// var Gest_2 = new Gestionnaire("Konaté", "adama@gmail.com","12345678");
// Gest_2.AjoutGestionnaire();
// Gest_2.SupGestionnaire("konate@gmail.com");
// Gest_2.ModifierGestionnaire("Adama","konate@gmail.com","12345678");
// const Org2:Organisateur=Gest_1.AjoutOrganisateur("chaka","chaka@gmail","12345678");
// Gest_2.ModifierOrg("Mamoutou", "Moutou@gmail.com","12345678","bouba@gmail");
// Gest_1.ModifierOrg("Fomba", "fomba@gmail.com", "12345678","mody@gmail.com");
// Org_1.PosTicket("Bama Art","VIP",30,2000);
// Org_1.AjouterEvent("BLABLA","gratuit","nananinanana");
// Gest_1.AjoutOrg(Org_1);
// Org_1.AjouterEventGratuit("Festival sur le niger","Ségou",1000,"21-05-2024","hdcdbhffgerueyfre");
// Org_1.AjouterEventPayant("IBA ONE","PALAIS",500,"10-06-2024",2000,"OrangeMoney","Bla bla bla");
// const Bouba = new Utilisateur("Bouba","bouba@gmail.com",76135276,"12345678");
// Bouba.RechercherEvent();
// Bouba.CreerCompte();
// Bouba.reservation("Bama Art");
// let Concert = new Evenement("Bama art","bla bla bla");
// Concert.PossederTicket("VIP",5,2000);
// Concert.PossederTicket("Pelouse",20,2000);
// var Gest_1 = new Gestionnaire("MAIGA", "maiga@gmail.com","blablabla");
// Gest_1.ListeUserforEvent("Bama Art");
// Gest_1.AjoutGestionnaire();
// const Org_2 = new Organisateur("Diabaté","diabate@gmail.com","1235678");
// Gest_1.AjoutOrg(Org_2);
// Org_2.AjoutLieu("CICB","Bamako",6,200);
// let Concert1=new Evenement("ODKShow","du codage a volonté");
// Org_2.AjoutEvent(Concert1,"Gratuit");
// Concert1.PossederTicket("VIP",3,1500);
// Concert1.PossederTicket("Pelouse",2,1000);
// const date1=new Date("2024-01-21");
// Concert1.A_Lieu("CICB",date1);
