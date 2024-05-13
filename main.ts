import { Utilisateur } from './Utilisateur';
import { Evenement } from './Evenement';
import { Gestion } from './Gestion';
import { Reserver} from './Reserver';
import { Lieu } from './Lieu';
import{ Organisateur } from './Organisateur';
import { Typeevent } from './Typeevent';

let user2 = new Utilisateur('Oudo Kanté','oudo@gmail');
// user2.CreerCompte();

user2.RechercherEvent('Concert de Gaspi');