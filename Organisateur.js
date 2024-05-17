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
// Fin de la connexion a la db 
var Organisateur = /** @class */ (function () {
    function Organisateur(nom_org, email_org, mdp_org) {
        this.nom_org = nom_org;
        this.email_org = email_org;
        this.mdp_org = mdp_org;
    }
    //   Ajout d un evenement a la base de donnee en se servant de la classe Evenement
    Organisateur.prototype.AjouterEvent = function (titre, nom_te, description, nom_lieu) {
        this.AjouterTypeevent(nom_te);
        var sql0 = 'SELECT id_lieu FROM lieu WHERE nom_lieu="' + nom_lieu + '"';
        var sql1 = 'SELECT id_org FROM organisateur WHERE nom_org="' + this.nom_org + '"';
        var sql2 = 'SELECT id_te FROM type_event WHERE nom_te="' + nom_te + '"';
        var sql3 = 'INSERT INTO evenement VALUES (' + sql1 + ',' + sql2 + ',?,?)';
        // let Typeevent = new Typeevent (id_lieu,id_orga,titre,description);
        // let Typeticket = new Typeticket(id_ti,nom_ti);
        connection.query(sql3, [titre, description], function (err, result) {
            if (err) {
                console.error('Erreur lors de l\'ajout de l\'événement:', err);
                return;
            }
            console.log('Événement ajouté avec succès');
        });
    };
    Organisateur.prototype.AjouterTypeevent = function (nom_te) {
        var sql = 'INSERT INTO type_event (nom_te) VALUES (' + nom_te + ')';
        connection.query(sql, function (err, result) {
            if (err) {
                console.error('Erreur lors de l ajout du type d event:', err);
                return;
            }
            console.log('Type d evenement modifié ajouter avec succès');
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
    Organisateur.prototype.StockId_org = function () {
        // const l1=new Lieu(lieu_name,ville_name,salle_name,capacite);
        var sql = "SELECT id_org FROM organisateur WHERE nom_org=?";
        connection.query(sql, [this.nom_org], function (err, result) {
            if (err) {
                console.log("Erreur lors de la recherche!!");
                return;
            }
            var id_org = result;
            console.log(id_org);
        });
    };
    Organisateur.prototype.StockId_lieu = function (nom_lieu) {
        // const l1=new Lieu(lieu_name,ville_name,salle_name,capacite);
        var sql = "SELECT id_lieu FROM lieu WHERE nom_lieu=?";
        connection.query(sql, [nom_lieu], function (err, result) {
            if (err) {
                console.log("Erreur lors de la recherche!!");
                return;
            }
            var id_lieu = result;
            console.log(id_lieu);
        });
    };
    Organisateur.prototype.A_Lieu = function (id_event, id_lieu, date) {
        connection.query('INSERT INTO avoir_lieu (id_event,id_lieu,date) VALUES (?,?,?)', [id_event, id_lieu, date], function (err, result) {
            if (err) {
                console.error('Erreur lors de l\' insertion:', err);
                return;
            }
            console.log('Insertion effectué avec succès ');
        });
    };
    return Organisateur;
}());
exports.Organisateur = Organisateur;
;
