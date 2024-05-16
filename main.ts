import { Utilisateur } from './Utilisateur';
import { Evenement } from './Evenement';
import { Gestion } from './Gestion';
import { Reserver} from './Reserver';
import { Lieu } from './Lieu';
import{ Organisateur } from './Organisateur';
import { Typeevent } from './Typeevent';
import {Gestionnaire} from './Gestionnaire';

// let user2 = new Utilisateur('Oudo Kanté','oudo@gmail');
// // user2.CreerCompte();

// user2.RechercherEvent('Concert de Gaspi');

var Gest_1 = new Gestionnaire("MAIGA", "maiga@gmail.com","blablabla");
// var Gest_2 = new Gestionnaire("Konaté", "adama@gmail.com","12345678");
// Gest_2.AjoutGestionnaire();
// Gest_2.SupGestionnaire("konate@gmail.com");
// Gest_2.ModifierGestionnaire("Adama","konate@gmail.com","12345678");


// const Org2:Organisateur=Gest_1.AjoutOrganisateur("chaka","chaka@gmail","12345678");

// Gest_2.ModifierOrg("Mamoutou", "Moutou@gmail.com","12345678","bouba@gmail");
// Gest_1.ModifierOrg("Fomba", "fomba@gmail.com", "12345678","mody@gmail.com");



const Org_1 = new Organisateur("Guindo","guindo@gmail.com","12345678");
// Org_1.AjoutLieu("CICB","Bamako",10,200);
// Org_1.PosTicket("Bama Art","VIP",30,2000);
// Org_1.AjouterEvent("BLABLA","gratuit","nananinanana");
// Gest_1.AjoutOrg(Org_1);
// Org_1.AjouterEventGratuit("Festival sur le niger","Ségou",1000,"21-05-2024","hdcdbhffgerueyfre");
// Org_1.AjouterEventPayant("IBA ONE","PALAIS",500,"10-06-2024",2000,"OrangeMoney","Bla bla bla");

// const Bouba = new Utilisateur("Bouba","bouba@gmail.com",76135276,"12345678");
// Bouba.RechercherEvent();
// Bouba.CreerCompte();
// Bouba.reservation("Bama Art");




let Concert = new Evenement("Bama art","bla bla bla");
// Org_1.AjoutEvent(Concert,"payant");
Concert.PossederTicket("VIP",5,2000);
Concert.PossederTicket("Pelouse",20,2000);


