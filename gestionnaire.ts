class gest {
  private idGest: number;
  private nomGest: string;
  private emailGest: string;
  private mdpGest: string;

  constructor(idGest: number, nomGest: string, emailGest: string, mdpGest: string) {
      this.idGest = idGest;
      this.nomGest = nomGest;
      this.emailGest = emailGest;
      this.mdpGest = mdpGest;
  }

  public getIdGest(): number {
      return this.idGest;
  }

  public setIdGest(idGest: number): void {
      this.idGest = idGest;
  }

  public getNomGest(): string {
      return this.nomGest;
  }

  public setNomGest(nomGest: string): void {
      this.nomGest = nomGest;
  }

  public getEmailGest(): string {
      return this.emailGest;
  }

  public setEmailGest(emailGest: string): void {
      this.emailGest = emailGest;
  }

  public getMdpGest(): string {
      return this.mdpGest;
  }

  public setMdpGest(mdpGest: string): void {
      this.mdpGest = mdpGest;
  }
}

const gest1 = new Gestionnaire(1, "Mody Barry", "modybarry50@gmail.com", "AMAS2024");
console.log(gestionnaire1);
