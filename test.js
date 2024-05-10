var Lieu = /** @class */ (function () {
    function Lieu(id, nom, adresse, capacite) {
        this.idLieu = id;
        this.nomLieu = nom;
        this.adresse = adresse;
        this.capacite = capacite;
    }
    Lieu.prototype.verifierCapacite = function () {
        return true;
    };
    Lieu.prototype.reserverLieu = function () {
    };
    return Lieu;
}());
