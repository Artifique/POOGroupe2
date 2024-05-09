var lieu = /** @class */ (function () {
    // CONSTRUCTEUR
    function lieu(id_lieu, nom, ville, num_sall, capacite) {
        this.id_lieu = id_lieu;
        this.nom = nom;
        this.ville = ville;
        this.num_sall = num_sall;
        this.capacite = capacite;
    }
    return lieu;
}());
var Lieu1 = new lieu(1, "CICB", "Bamako", 10, 200);
Lieu1.nom = "Hotel de l'amitié";
console.log(Lieu1);
// const id1 = new lieu(1);
// console.log(id1);
// id1.setid_lieu(2);
// console.log(id1);
