"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typeevent = void 0;
var Typeevent = /** @class */ (function () {
    function Typeevent(nom) {
        this.nom_te = nom;
    }
    //Getter
    Typeevent.prototype.getNom_te = function () {
        return this.nom_te;
    };
    //Setter
    Typeevent.prototype.setNom_te = function (nom) {
        this.nom_te = nom;
    };
    return Typeevent;
}());
exports.Typeevent = Typeevent;
