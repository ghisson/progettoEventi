export class SupportoPrenotazione {

    private carta:string
    private intestatario:string
    private cvv:string;
    private dataScadenza:Date;
    private idUtente:number;
    private idSettoreDataEvento:number;
    private utentiInvitati:string[];


    constructor(idUtente:any,idSettoreDataEvento:any,dati:any,utentiInvitati:string[]){
        this.carta=dati.get("carta")?.value;
        this.intestatario=dati.get("intestatario")?.value;
        this.cvv=dati.get("cvv")?.value;
        this.dataScadenza=dati.get("dataScadenza")?.value;
        this.idUtente=idUtente;
        this.idSettoreDataEvento=idSettoreDataEvento;
        this.utentiInvitati=utentiInvitati;
    }

    getCarta(){
        return this.carta
    }
    getIntestatario(){
        return this.intestatario
    }
    getCVV(){
        return this.cvv
    }
    getDataScadenza(){
        return this.dataScadenza
    }
    getIdUtente(){
        return this.idUtente
    }
    getIdSettoreDataEvento(){
        return this.idSettoreDataEvento
    }
    getUtentiInvitati(){
        return this.utentiInvitati
    }
}
