export class Evento {

    private idEvento:number;
    private nomeEvento:string;
    private categoriaEvento:string;
    private autoreEvento:string;
    private descrizioneEvento:string;

    constructor(evento:any){
        this.idEvento=evento.idEvento;
        this.nomeEvento=evento.nomeEvento;
        this.categoriaEvento=evento.categoriaEvento;
        this.autoreEvento=evento.autoreEvento;
        this.descrizioneEvento=evento.descrizioneEvento;
    }

    getIdEvento(){
        return this.idEvento
    }
    getNomeEvento(){
        return this.nomeEvento;
    }
    getCategoriaEvento(){
        return this.categoriaEvento;
    }
    getAutoreEvento(){
        return this.autoreEvento;
    }
    getDescrizioneEvento(){
        return this.descrizioneEvento;
    }
}
