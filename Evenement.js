"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvenementPayant = exports.Evenement = void 0;
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
    function Evenement(titre, lieu, nbrplace, dateEvent, description) {
        this.titre = titre;
        this.lieu = lieu;
        this.nbrplace = nbrplace;
        this.dateEvent = dateEvent;
        this.description = description;
    }
    return Evenement;
}());
exports.Evenement = Evenement;
;
var EvenementPayant = /** @class */ (function (_super) {
    __extends(EvenementPayant, _super);
    function EvenementPayant(titre, lieu, nbrplace, dateEvent, prix, methodepaiement, description) {
        var _this = _super.call(this, titre, lieu, nbrplace, dateEvent, description) || this;
        _this.prix = prix;
        _this.methodepaiement = methodepaiement;
        return _this;
    }
    return EvenementPayant;
}(Evenement));
exports.EvenementPayant = EvenementPayant;
;
// export class EvenementGratuit extends Evenement{
//     // public methodepaiement: string;
//     // public prix: number;
//     constructor(titre: string,lieu:string,nbrplace:number,description: string) {
//       super(titre,lieu,nbrplace,description);
//         // this.prix =  prix;
//         // this.methodepaiement =  methodepaiement;
//     }
// };
