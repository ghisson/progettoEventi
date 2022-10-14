import { DataEvento } from "./data-evento";
import { Settore } from "./settore";

export class SettoreDataEvento {

    private idSettoreDataEvento:number;
    private prezzoBiglietto:number;
    private dataEvento:DataEvento;
    private settore:Settore;
    private postiDisponibili:number;

    constructor(settoreDataEvento:any){
        this.postiDisponibili=settoreDataEvento.postiDisponibili;
        this.idSettoreDataEvento=settoreDataEvento.idSettoreDataEvento;
        this.prezzoBiglietto=settoreDataEvento.prezzoBiglietto;
        this.dataEvento=new DataEvento(settoreDataEvento.dataEvento)
        this.settore=new Settore(settoreDataEvento.settore)
    }

    getIdSettoreDataEvento(){
        return this.idSettoreDataEvento;
    }

    getPrezzoBiglietto(){
        return this.prezzoBiglietto;
    }
    getDataEvento(){
        return this.dataEvento;
    }

    getSettore(){
        return this.settore;
    }
    getPostiDisponibili(){
        return this.postiDisponibili;
    }
}
