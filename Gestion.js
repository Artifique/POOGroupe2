"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gestion = void 0;
var Gestion = /** @class */ (function () {
    function Gestion(id_gest, id_event, date_gest, action) {
        this.id_gest = id_gest;
        this.id_event = id_event;
        this.date_gest = date_gest;
        this.action = action;
    }
    //Getters
    Gestion.prototype.getId_gest = function () {
        return this.id_gest;
    };
    Gestion.prototype.getId_event = function () {
        return this.id_event;
    };
    Gestion.prototype.getDate_gest = function () {
        return this.date_gest;
    };
    Gestion.prototype.getAction = function () {
        return this.action;
    };
    //Setters
    Gestion.prototype.setId_gest = function (id_gest) {
        this.id_gest = id_gest;
    };
    Gestion.prototype.setId_event = function (id_event) {
        this.id_event = id_event;
    };
    Gestion.prototype.setDate_gest = function (date_gest) {
        this.date_gest = date_gest;
    };
    Gestion.prototype.setAction = function (action) {
        this.action = action;
    };
    return Gestion;
}());
exports.Gestion = Gestion;
