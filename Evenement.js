"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evenement = void 0;
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
var Evenement = /** @class */ (function () {
    function Evenement(titre, description) {
        // this.id_te = id_te;
        // this.id_org = id_org;
        this.titre = titre;
        this.description = description;
    }
    Evenement.prototype.PossederTicket = function (nom_tic, nbr_ticket, prix) {
        var query = '(SELECT id_event FROM evenement WHERE titre="' + this.titre + '"  LIMIT 1)';
        var query1 = '(SELECT id_tic FROM type_ticket WHERE nom_tic="' + nom_tic + '"  LIMIT 1)';
        var query2 = 'INSERT into posseder  VALUES (' + query + ',' + query1 + ',?,?)';
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
    return Evenement;
}());
exports.Evenement = Evenement;
;
// export class EvenementPayant extends Evenement{
//     public methodepaiement: string;
//     public prix: number;
//     constructor(titre: string,lieu:string,nbrplace:number,dateEvent:string,prix: number,methodepaiement: string,description: string) {
//     super(titre,lieu,nbrplace,dateEvent,description);
//         this.prix =  prix;
//         this.methodepaiement =  methodepaiement;
//     }
// };
// export class EvenementGratuit extends Evenement{
//     // public methodepaiement: string;
//     // public prix: number;
//     constructor(titre: string,lieu:string,nbrplace:number,description: string) {
//       super(titre,lieu,nbrplace,description);
//         // this.prix =  prix;
//         // this.methodepaiement =  methodepaiement;
//     }
// };
