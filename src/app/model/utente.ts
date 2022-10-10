
export class Utente {

    private nome:string;

    private cognome:string;

    private genere:string;

    private email:string;

    private password:string;
     
    private data_di_nascita:Date;

    private luogo_di_nascita:string;

    private codice_fiscale:string;


    /*constructor(nome:string, cognome:string,genere:string,email:string,password:string,data_di_nascita:Date,luogo_di_nascita:string, codice_fiscale:string){

        this.nome=nome;
        this.cognome=cognome;
        this.genere=genere;
        this.email=email;
        this.password=password;
        this.data_di_nascita=data_di_nascita;
        this.luogo_di_nascita=luogo_di_nascita;
        this.codice_fiscale=codice_fiscale;
    }*/




    constructor(utente:any){
        this.nome=utente.get('nome').value
        this.cognome=utente.get('cognome').value
        this.genere=utente.get('genere').value
        this.email=utente.get('email').value
        this.password=utente.get('password').value
        this.data_di_nascita=utente.get('data_di_nascita').value
        this.luogo_di_nascita=utente.get('luogo_di_nascita').value
        this.codice_fiscale=utente.get('codice_fiscale').value

    }

    getNome(){
        return this.nome;
    }

}
