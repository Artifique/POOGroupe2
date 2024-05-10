class Gest {
    private id: number;
    private nom: string;
    private email: string;
    private mdp: string;
  
    constructor(id: number, nom: string, email: string, mdp: string) {
      this.id = id;
      this.nom = nom;
      this.email = email;
      this.mdp = mdp;
    }
  
    // Getter pour l'ID du gestionnaire
    getId(): number {
      return this.id;
    }
  
    // Getter pour le nom du gestionnaire
    getNom(): string {
      return this.nom;
    }
  
    // Setter pour le nom du gestionnaire
    setNom(nom: string): void {
      this.nom = nom;
    }
  
    // Getter pour l'email du gestionnaire
    getEmail(): string {
      return this.email;
    }
  
    // Setter pour l'email du gestionnaire
    setEmail(email: string): void {
      this.email = email;
    }
  
    // Getter pour le mot de passe du gestionnaire
    getMdp(): string {
      return this.mdp;
    }
  
    // Setter pour le mot de passe du gestionnaire
    setMdp(mdp: string): void {
      this.mdp = mdp;
    }
  }
  
  // Exemple d'utilisation de la classe Gest
  const gest1 = new Gest(1, 'Safiatou Tandia', 'safi@gmail.com', 'safi');
  console.log(gest1.getNom()); // Output: Safiatou Tandia
  console.log(gest1.getEmail()); // Output: safi@gmail.com
  gest1.setNom('Mariam Koné');
  console.log(gest1.getNom()); // Output: Mariam Koné
  