class Gest {
  private id: number;
  private nom: string;
  private email: string;
  private mdp: string;

  constructor(id: number, nom: string, email: string, mdp: string) {
      this.id = id;
      this.nom = nom;
      this.email = email;
      this.mdp = mdp; // Assurez-vous que le mot de passe est stocké de manière sécurisée
  }

  public getId(): number {
      return this.id;
  }

  static creerNouveauGestionnaire(nom: string, email: string, mdp: string): Gest {
      const nouvelId = Gest.dernierIdGestionnaire + 1;
      const nouveauGestionnaire = new Gest(nouvelId, nom, email, mdp);
      Gest.listeGestionnaires.push(nouveauGestionnaire);
      Gest.dernierIdGestionnaire = nouvelId;
      return nouveauGestionnaire;
  }

  static trouverGestionnaireParNom(listeGestionnaires: Gest[], nomRecherche: string): Gest | undefined {
      return listeGestionnaires.find(g => g.nom === nomRecherche);
  }

  static trouverIndexGestionnaireParNom(listeGestionnaires: Gest[], nomRecherche: string): number {
      return listeGestionnaires.findIndex(g => g.nom === nomRecherche);
  }

  static listeGestionnaires: Gest[] = [];
  static dernierIdGestionnaire: number = 0;
}

// Instanciation des classes Gestionnaire
const gest1 = Gest.creerNouveauGestionnaire("Bouba", "bouba@gmail.com", "bouba");
const gest2 = Gest.creerNouveauGestionnaire("Delegue", "delegue@gmail.com", "delegue");
