"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avoirlieu = void 0;
var Avoirlieu = /** @class */ (function () {
    function Avoirlieu(id_event, id_lieu, date_event) {
        this.id_event = id_event;
        this.id_lieu = id_lieu;
        this.date_event = date_event;
    }
    //Getters
    Avoirlieu.prototype.getId_event = function () {
        return this.id_event;
    };
    Avoirlieu.prototype.getId_lieu = function () {
        return this.id_lieu;
    };
    Avoirlieu.prototype.getDate_event = function () {
        return this.date_event;
    };
    //Setters
    Avoirlieu.prototype.setId_event = function (id_event) {
        this.id_event = id_event;
    };
    Avoirlieu.prototype.setId_lieu = function (id_lieu) {
        this.id_lieu = id_lieu;
    };
    Avoirlieu.prototype.setDate_event = function (date_event) {
        this.date_event = date_event;
    };
    return Avoirlieu;
}());
exports.Avoirlieu = Avoirlieu;
