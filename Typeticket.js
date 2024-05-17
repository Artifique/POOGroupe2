"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typeticket = void 0;
var Typeticket = /** @class */ (function () {
    function Typeticket(nom) {
        this.nom_ti = nom;
    }
    //Getter
    Typeticket.prototype.getnom_ti = function () {
        return this.nom_ti;
    };
    //Setter
    Typeticket.prototype.setnom_ti = function (nom) {
        this.nom_ti = nom;
    };
    return Typeticket;
}());
exports.Typeticket = Typeticket;
