import { Luogo } from "./luogo";

export class Settore {
  private idSettore:number;
  private nomeSettore:string;
  private numeroPosti: number;
  private luogo:Luogo;

  constructor(settore:any){
    this.idSettore=settore.idSettore;
    this.nomeSettore=settore.nomeSettore;
    this.numeroPosti=settore.numeroPosti;
    this.luogo=new Luogo(settore.luogo)
  }

  public getIdSettore():number {
    return this.idSettore;
  }
  public getNomeSettore():string {
    return this.nomeSettore;
  }
  public getNumeroPosti():number {
    return this.numeroPosti;
  }
  public getLuogo():Luogo {
    return this.luogo;
  }
}
