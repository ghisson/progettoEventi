import { Evento } from "./evento";

export class DataEvento {

    private idDataEvento:number;
    private dataInizio:Date;
    private dataFine:Date;
    private settimane:string[];
    private mesi: string[];

    private evento:Evento;

    constructor(dataEvento:any){
        this.idDataEvento=dataEvento.idDataEvento;
        this.dataFine=new Date(dataEvento.dataFine);
        this.dataInizio=new Date(dataEvento.dataInizio);
        this.evento=new Evento(dataEvento.evento)
        this.settimane=["Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato","Domenica"];
        this.mesi=["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];
    }

    getIdDataEvento(){
        return this.idDataEvento;
    }
    getDatainizio(){
        return this.dataInizio;
    }
    getDataFine(){
        return this.dataFine;
    }
    getEvento(){
        return this.evento;
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
    
}
