import { Utilisateur } from './Utilisateur';
import { Evenement } from './Evenement';
import { Gestion } from './Gestion';
import { Reserver} from './Reserver';
import { Lieu } from './Lieu';
import{ Organisateur } from './Organisateur';
import { Typeevent } from './Typeevent';
import { Gestionnaire } from './Gestionnaire';

//let user2 = new Utilisateur('Oudo Kanté','oudo@gmail');
// user2.CreerCompte();

//user2.RechercherEvent('Concert de Gaspi');
let gest1 = new Gestionnaire('Mohamed','momo@gmail','1234');

//gest1.AjoutGestionnaire();
//gest1.SupGestionnaire('momo@gmail');
//gest1.ModifierGestionnaire('Mohamed','alassane@gmail','0000');
//gest1.AjoutOraganisateur('Mohamed','alassane@gmail','0000');
let util1 = new Utilisateur('Moussa','moussa@gmail',66423544,'gggg');
//util1.CreerCompte();
//gest1.SupUtlisateur('moussa@gmail');
util1.ModifierUtilisateur('Moussa','lassana@gmail',66989855,'4444');




