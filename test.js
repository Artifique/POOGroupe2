var lieu = /** @class */ (function () {
    function lieu(id, nom, adresse, capacite) {
        this._idLieu = id;
        this._nomLieu = nom;
        this._adresse = adresse;
        this._capacite = capacite;
    }
    Object.defineProperty(lieu.prototype, "idLieu", {
        // Getter pour idLieu
        get: function () {
            return this._idLieu;
        },
        // Setter pour idLieu
        set: function (value) {
            this._idLieu = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(lieu.prototype, "nomLieu", {
        // Getter pour nomLieu
        get: function () {
            return this._nomLieu;
        },
        // Setter pour nomLieu
        set: function (value) {
            this._nomLieu = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(lieu.prototype, "adresse", {
        // Getter pour adresse
        get: function () {
            return this._adresse;
        },
        // Setter pour adresse
        set: function (value) {
            this._adresse = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(lieu.prototype, "capacite", {
        // Getter pour capacite
        get: function () {
            return this._capacite;
        },
        // Setter pour capacite
        set: function (value) {
            this._capacite = value;
        },
        enumerable: false,
        configurable: true
    });
    return lieu;
}());
// Création d'une instance de la classe lieu
var monLieu = new lieu(1, "Hamdallaye", "Rue 20", 100);
// Utilisation des getters pour obtenir les valeurs des propriétés
console.log("ID du Lieu :", monLieu.idLieu);
console.log("Nom du Lieu :", monLieu.nomLieu);
console.log("Adresse du Lieu :", monLieu.adresse);
console.log("Capacité du Lieu :", monLieu.capacite);
// Utilisation des setters pour modifier les valeurs des propriétés
monLieu.idLieu = 2;
monLieu.nomLieu = "Lafiabougou";
monLieu.adresse = "Rue 120";
monLieu.capacite = 150;
// Vérification des modifications avec les getters
console.log("ID du Lieu après modification :", monLieu.idLieu);
console.log("Nom du Lieu après modification :", monLieu.nomLieu);
console.log("Adresse du Lieu après modification :", monLieu.adresse);
console.log("Capacité du Lieu après modification :", monLieu.capacite);
