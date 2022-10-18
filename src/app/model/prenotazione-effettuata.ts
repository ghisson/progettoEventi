export class PrenotazioneEffettuata {
  private idPrenotazioneEffettuata: number;
  private dataPrenotazione: Date;
  private nomeLuogo: string;
  private ubicazione: string;
  private nomeSettore: string;
  private categoriaEvento: string;
  private autoriEvento: string;
  private nomeEvento: string;
  private dataInizio: Date;
  private dataFine: Date;
  private postiPrenotati: number;
  private prezzoBiglietto: number;
  private recensione: string;
  private votoRecensione: number;
  private numeroCarta: string;
  private cvvCarta: string;
  private dataScadenza: Date;
  private intestatarioCarta: string;
  private descrizioneEvento: string;
  private settimane:string[];
  private mesi:string[];
  private utentiInvitati: string[];

  constructor(dati: any) {
    this.idPrenotazioneEffettuata = dati.idPrenotazioneEffettuata;
    this.dataPrenotazione = new Date(dati.dataPrenotazione);
    this.nomeLuogo = dati.nomeLuogo;
    this.ubicazione = dati.ubicazione;
    this.nomeSettore = dati.nomeSettore;
    this.categoriaEvento = dati.categoriaEvento;
    this.autoriEvento = dati.autoriEvento;
    this.nomeEvento = dati.nomeEvento;
    this.dataInizio = new Date(dati.dataInizio);
    this.dataFine = new Date(dati.dataFine);
    this.postiPrenotati = dati.postiPrenotati;
    this.prezzoBiglietto = dati.prezzoBiglietto;
    this.recensione = dati.recensione;
    this.votoRecensione = dati.votoRecensione;
    this.numeroCarta = dati.numeroCarta;
    this.cvvCarta = dati.cvvCarta;
    this.dataScadenza = new Date(dati.dataScadenza);
    this.intestatarioCarta = dati.intestatarioCarta;
    this.descrizioneEvento = dati.descrizioneEvento;
    this.settimane=["Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato","Domenica"];
    this.mesi=["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];
    this.utentiInvitati=[];
    for(let i=0; i<dati.utentiInvitati.length;i++){
      this.utentiInvitati.push(dati.utentiInvitati[i].codiceFiscale)
    }
  }

  getUtentiInvitati(){
    return this.utentiInvitati;
  }

getMonthInizio() {
    return this.dataInizio.getMonth()+1;
}
getDayInizio(){
    return this.dataInizio.getDate();
}
getOraInizio(){
    return this.dataInizio.getHours();
}
getMinutiInizio(){
    if(this.dataInizio.getMinutes().toString().length===1){
        return "0"+this.dataInizio.getMinutes().toString();
    }
    return this.dataInizio.getMinutes();
}
getOraFine(){
    return this.dataFine.getHours();
}
getMinutiFine(){
    if(this.dataFine.getMinutes().toString().length===1){
        return "0"+this.dataFine.getMinutes().toString();
    }
    return this.dataFine.getMinutes();
}
getDayText(){
    return this.settimane[this.dataInizio.getDay()];
}
getMonthInizioText() {
    return this.mesi[this.dataInizio.getMonth()];
}

  public getIdPrenotazioneEffettuata(): number {
    return this.idPrenotazioneEffettuata;
  }

  public setIdPrenotazioneEffettuata(idPrenotazioneEffettuata: number): void {
    this.idPrenotazioneEffettuata = idPrenotazioneEffettuata;
  }

  public getDataPrenotazione(): Date {
    return this.dataPrenotazione;
  }

  public setDataPrenotazione(dataPrenotazione: Date): void {
    this.dataPrenotazione = dataPrenotazione;
  }

  public getNomeLuogo(): string {
    return this.nomeLuogo;
  }

  public setNomeLuogo(nomeLuogo: string): void {
    this.nomeLuogo = nomeLuogo;
  }

  public getUbicazione(): string {
    return this.ubicazione;
  }

  public setUbicazione(ubicazione: string): void {
    this.ubicazione = ubicazione;
  }

  public getNomeSettore(): string {
    return this.nomeSettore;
  }

  public setNomeSettore(nomeSettore: string): void {
    this.nomeSettore = nomeSettore;
  }

  public getCategoriaEvento(): string {
    return this.categoriaEvento;
  }

  public setCategoriaEvento(categoriaEvento: string): void {
    this.categoriaEvento = categoriaEvento;
  }

  public getAutoriEvento(): string {
    return this.autoriEvento;
  }

  public setAutoriEvento(autoriEvento: string): void {
    this.autoriEvento = autoriEvento;
  }

  public getNomeEvento(): string {
    return this.nomeEvento;
  }

  public setNomeEvento(nomeEvento: string): void {
    this.nomeEvento = nomeEvento;
  }

  public getDataInizio(): Date {
    return this.dataInizio;
  }

  public setDataInizio(dataInizio: Date): void {
    this.dataInizio = dataInizio;
  }

  public getDataFine(): Date {
    return this.dataFine;
  }

  public setDataFine(dataFine: Date): void {
    this.dataFine = dataFine;
  }

  public getPostiPrenotati(): number {
    return this.postiPrenotati;
  }

  public setPostiPrenotati(postiPrenotati: number): void {
    this.postiPrenotati = postiPrenotati;
  }

  public getPrezzoBiglietto(): number {
    return this.prezzoBiglietto;
  }

  public setPrezzoBiglietto(prezzoBiglietto: number): void {
    this.prezzoBiglietto = prezzoBiglietto;
  }

  public getRecensione(): string {
    return this.recensione;
  }

  public setRecensione(recensione: string): void {
    this.recensione = recensione;
  }

  public getVotoRecensione(): number {
    return this.votoRecensione;
  }

  public setVotoRecensione(votoRecensione: number): void {
    this.votoRecensione = votoRecensione;
  }

  public getNumeroCarta(): string {
    return this.numeroCarta;
  }

  public setNumeroCarta(numeroCarta: string): void {
    this.numeroCarta = numeroCarta;
  }

  public getCvvCarta(): string {
    return this.cvvCarta;
  }

  public setCvvCarta(cvvCarta: string): void {
    this.cvvCarta = cvvCarta;
  }

  public getDataScadenza(): Date {
    return this.dataScadenza;
  }

  public setDataScadenza(dataScadenza: Date): void {
    this.dataScadenza = dataScadenza;
  }

  public getIntestatarioCarta(): string {
    return this.intestatarioCarta;
  }

  public setIntestatarioCarta(intestatarioCarta: string): void {
    this.intestatarioCarta = intestatarioCarta;
  }

  public getDescrizioneEvento(): string {
    return this.descrizioneEvento;
  }

  public setDescrizioneEvento(descrizioneEvento: string): void {
    this.descrizioneEvento = descrizioneEvento;
  }
}
