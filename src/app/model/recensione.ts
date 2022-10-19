import { PrenotazioneEffettuata } from '../model/prenotazione-effettuata';

export class Recensione {
  private votoUno:number;
  private percUno:number;

    
  private votoDue:number;
  private percDue:number;

    

  private votoTre:number;
  private percTre:number;

    

  private votoQuattro:number;
  private percQuattro:number;

   

  private votoCinque:number;
  private percCinque:number;

    

  private media: number
  private tot:number;


    


  votiTot: number[];

  constructor(rec:PrenotazioneEffettuata[]){
    this.votiTot=[];
    this.percUno=0;
    this.percDue=0;
    this.percTre=0;
    this.percQuattro=0;
    this.percCinque=0;
    this.tot=0;
    this.media=0;
    this.votoUno=0;
    this.votoDue=0;
    this.votoTre =0;
    this.votoQuattro =0;
    this.votoCinque =0;
    for(let i=0; i<rec.length; i++){
      if(rec[i].getVotoRecensione()==5){
        this.votoCinque+=1;
        this.tot+=1;
      } if(rec[i].getVotoRecensione()==4){
        this.votoQuattro+=1;
        this.tot+=1;
      } if(rec[i].getVotoRecensione()==3){
        this.votoTre+=1;
        this.tot+=1;
      } if(rec[i].getVotoRecensione()==2){
        this.votoDue+=1;
        this.tot+=1;
      } if(rec[i].getVotoRecensione()==1){
        this.votoUno+=1;
        this.tot+=1;
      }
    }
    this.votiTot.push(this.votoUno, this.votoDue, this.votoTre, this.votoQuattro, this.votoCinque)
    for(let i=0; i<this.votiTot.length;i++){
      this.media += this.votiTot[i]*(i+1);
    }
    this.percCinque=(this.votoCinque/this.tot)*100;
    this.percQuattro=(this.votoQuattro/this.tot)*100;
    this.percTre=(this.votoTre/this.tot)*100;
    this.percDue=(this.votoDue/this.tot)*100;
    this.percUno=(this.votoUno/this.tot)*100;

    this.media=this.media/this.tot;
  }

  public getPercDue(): number {
    return this.percDue;
}

public setPercDue(percDue: number): void {
    this.percDue = percDue;
}

  public getPercTre(): number {
    return this.percTre;
}

public setPercTre(percTre: number): void {
    this.percTre = percTre;
}


  public getPercQuattro(): number {
    return this.percQuattro;
}

public setPercQuattro(percQuattro: number): void {
    this.percQuattro = percQuattro;
}

  public getPercCinque(): number {
    return this.percCinque;
}

public setPercCinque(percCinque: number): void {
    this.percCinque = percCinque;
}

  public getPercUno(): number {
    return this.percUno;
}

public setPercUno(percUno: number): void {
    this.percUno = percUno;
}


  
  public getTot(): number {
    return this.tot;
}

public setTot(tot: number): void {
    this.tot = tot;
}

  public getMedia():number {
    console.log(this.media)
    return this.media;
  }

  public setMedia(media:number):void{
    this.media=media;
  }

  public getVotoUno(): number {
    return this.votoUno;
}

public setVotoUno(votoUno: number): void {
    this.votoUno = votoUno;
}

public getVotoDue(): number {
    return this.votoDue;
}

public setVotoDue(votoDue: number): void {
    this.votoDue = votoDue;
}

public getVotoTre(): number {
    return this.votoTre;
}

public setVotoTre(votoTre: number): void {
    this.votoTre = votoTre;
}

public getVotoQuattro(): number {
    return this.votoQuattro;
}

public setVotoQuattro(votoQuattro: number): void {
    this.votoQuattro = votoQuattro;
}

public getVotoCinque(): number {
    return this.votoCinque;
}

public setVotoCinque(votoCinque: number): void {
    this.votoCinque = votoCinque;
}

}
