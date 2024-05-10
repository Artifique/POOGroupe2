class lieu {
  private _idLieu: number;
  private _nomLieu: string;
  private _adresse: string;
  private _capacite: number;

  constructor(id: number, nom: string, adresse: string, capacite: number) {
      this._idLieu = id;
      this._nomLieu = nom;
      this._adresse = adresse;
      this._capacite = capacite;
  }

  // Getter pour idLieu
  get idLieu(): number {
      return this._idLieu;
  }

  // Setter pour idLieu
  set idLieu(value: number) {
      this._idLieu = value;
  }

  // Getter pour nomLieu
  get nomLieu(): string {
      return this._nomLieu;
  }

  // Setter pour nomLieu
  set nomLieu(value: string) {
      this._nomLieu = value;
  }

  // Getter pour adresse
  get adresse(): string {
      return this._adresse;
  }

  // Setter pour adresse
  set adresse(value: string) {
      this._adresse = value;
  }

  // Getter pour capacite
  get capacite(): number {
      return this._capacite;
  }

  // Setter pour capacite
  set capacite(value: number) {
      this._capacite = value;
  }
}

// Création d'une instance de la classe lieu
const monLieu = new lieu(1, "Hamdallaye", "Rue 20", 100);

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
