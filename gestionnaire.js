var Gestionnaire = /** @class */ (function () {
    function Gestionnaire(idGest, nomGest, emailGest, mdpGest) {
        this.idGest = idGest;
        this.nomGest = nomGest;
        this.emailGest = emailGest;
        this.mdpGest = mdpGest;
    }
    Gestionnaire.prototype.getIdGest = function () {
        return this.idGest;
    };
    Gestionnaire.prototype.setIdGest = function (idGest) {
        this.idGest = idGest;
    };
    Gestionnaire.prototype.getNomGest = function () {
        return this.nomGest;
    };
    Gestionnaire.prototype.setNomGest = function (nomGest) {
        this.nomGest = nomGest;
    };
    Gestionnaire.prototype.getEmailGest = function () {
        return this.emailGest;
    };
    Gestionnaire.prototype.setEmailGest = function (emailGest) {
        this.emailGest = emailGest;
    };
    Gestionnaire.prototype.getMdpGest = function () {
        return this.mdpGest;
    };
    Gestionnaire.prototype.setMdpGest = function (mdpGest) {
        this.mdpGest = mdpGest;
    };
    return Gestionnaire;
}());
var gestionnaire1 = new Gestionnaire(1, "Mody Barry", "modybarry50@gmail.com", "AMAS2024");
console.log(gestionnaire1);
