"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reserver = void 0;
var Reserver = /** @class */ (function () {
    function Reserver(id_event, id_util, methode_paie) {
        this.id_event = id_event;
        this.id_util = id_util;
        this.methode_paie = methode_paie;
    }
    //Getter
    Reserver.prototype.getId_event = function () {
        return this.id_event;
    };
    Reserver.prototype.getId_util = function () {
        return this.id_util;
    };
    Reserver.prototype.getMethode_paie = function () {
        return this.methode_paie;
    };
    //Setter
    Reserver.prototype.setId_event = function (id_event) {
        this.id_event = id_event;
    };
    Reserver.prototype.setId_util = function (id_util) {
        this.id_util = id_util;
    };
    Reserver.prototype.setMethode_paie = function (methode_paie) {
        this.methode_paie = methode_paie;
    };
    return Reserver;
}());
exports.Reserver = Reserver;
