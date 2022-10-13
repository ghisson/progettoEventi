export class Luogo {
  private idLuogo: number;
  private nomeLuogo:string;
  private ubicazione:string;

  constructor(luogo:any){
    this.idLuogo=luogo.idLuogo;
    this.nomeLuogo=luogo.nomeLuogo;
    this.ubicazione=luogo.ubicazione;
  }

  public getIdLuogo():number {
    return this.idLuogo;
  }
  public getNomeLuogo():string {
    return this.nomeLuogo;
  }
  public getUbicazione():string {
    return this.ubicazione;
  }
}
