import { Evento } from "./evento";

export class DataEvento {

    private idDataEvento:number;
    private dataInizio:Date;
    private dataFine:Date;

    private evento:Evento;

    constructor(dataEvento:any){
        this.idDataEvento=dataEvento.idDataEvento;
        this.dataFine=dataEvento.dataFine;
        this.dataInizio=dataEvento.dataInizio;
        this.evento=new Evento(dataEvento.evento)
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
}
