"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organisateur = void 0;
var mysql = require("mysql");
// Configuration de la connexion à la base de données MySQL
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestevent'
});
console.log(typeof (connection));
// Connexion à la base de données
connection.connect(function (err) {
    if (err) {
        console.error('Erreur lors de la connexion à la base de données:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
    return;
});
var Organisateur = /** @class */ (function () {
    function Organisateur(nom_org, email_org, mdp_org) {
        this.nom_org = nom_org;
        this.email_org = email_org;
        this.mdp_org = mdp_org;
    }
    //   Ajout d un evenement a la base de donnee en se servant de la classe Evenement
    Organisateur.prototype.AjoutEvent = function (Event, type_event) {
        var query = '(SELECT id_org FROM organisateur WHERE email_org="' + this.email_org + '")';
        var query1 = '(SELECT id_te FROM type_event WHERE nom_te ="' + type_event + '")';
        var sql = 'INSERT INTO evenement (id_te, id_org, titre,description) VALUES (' + query1 + ',' + query + ',?,?)';
        connection.query(sql, [Event.titre, Event.description], function (err, results) {
            if (err) {
                console.log("Erreur lors de l insertion!!");
                return;
            }
            console.log("Evenement Inseré !!");
        });
    };
    //     AjouterEvent(titre:string,type_event:string,description:string):void{
    //         // let evenement = new Evenement(titre,lieu,nbrplace,dateEvent,description);
    //         const query='(SELECT id_org FROM organisateur WHERE email_org="'+this.email_org+'")';
    //         const query1='(SELECT id_te FROM type_event WHERE nom_te ="'+type_event+'")';
    //         const query2='(SELECT id_event FROM evenement WHERE titre="'+titre+'")';
    //         const query3='(SELECT id_tic FROM type_ticket WHERE nom_tic="'+nom_tic+'")';
    // const query4='INSERT INTO evenement (id_te,id_org,titre,description) VALUES ('+query1+','+query+',?,?)';
    //       connection.query(query2, [titre,description], (err) => {
    //        if (err) {
    //            console.error('Erreur lors de la reservation de l\'id utilisateur :', err);
    //            return;
    //        }else{
    //         console.log('Evenement OK');
    //            return;
    //         }
    //    });
    //     }
    Organisateur.prototype.PossederTicket = function (titre, nom_tic, nbr_ticket, prix) {
        var query = '(SELECT id_event FROM evenement WHERE titre="' + titre + '")';
        var query1 = '(SELECT id_tic FROM type_ticket WHERE nom_tic="' + nom_tic + '")';
        var query2 = 'INSERT into posseder (id_event,id_tic,nbr_ticket,prix) VALUES (' + query + ',' + query1 + ',?,?)';
        connection.query(query2, [nbr_ticket, prix], function (err) {
            if (err) {
                console.error('Erreur lors de la reservation de l\'id utilisateur :', err);
                return;
            }
            else {
                console.log('Tichet OK');
                return;
            }
        });
    };
    // AjouterEventPayant(titre:string,lieu:string,nbrplace:number,dateEvent:string,prix: number,methodepaiement: string,description:string):void{
    //     let evenement = new EvenementPayant(titre,lieu,nbrplace,dateEvent,prix,methodepaiement,description);
    //     connection.query('INSERT INTO evenement (titre,lieu,nbrplace,dateEvent,prix,methode_paie,description) VALUES (?,?,?,?,?,?,?)', [titre,lieu,nbrplace,dateEvent,prix,methodepaiement,description], (err, result) => {
    //         if (err) {
    //             console.error('Erreur lors de l\'ajout de l\'événement:', err);
    //             return ;
    //         }
    //         console.log('Événement ajouté avec succès');
    //     });
    // }
    // POSSEDER TICKET
    // Ajout de lieu
    Organisateur.prototype.AjoutLieu = function (nom_lieu, ville_lieu, salle, capacite) {
        var query2 = 'INSERT into lieu (nom_lieu,ville_lieu,salle,capacite) VALUES (?,?,?,?)';
        connection.query(query2, [nom_lieu, ville_lieu, salle, capacite], function (err) {
            if (err) {
                console.error('Erreur lors de l ajout du lieu:', err);
                return;
            }
            else {
                console.log('Lieu ajouter');
                return;
            }
        });
    };
    // Modification du contenu d un evenement deja dans la base de donnee
    Organisateur.prototype.ModifierEvent = function (titre, description, id_evenement) {
        connection.query('UPDATE evenement SET  titre =?, description =? WHERE id_evenement =?', [titre, description, id_evenement], function (err, result) {
            if (err) {
                console.error('Erreur lors de la modification de l\'événement:', err);
                return;
            }
            console.log('Événement modifié avec succès');
        });
    };
    return Organisateur;
}());
exports.Organisateur = Organisateur;
;
