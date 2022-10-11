
export class Utente {

    private nome:string;

    private cognome:string;

    private genere:string;

    private email:string;

    private password:string;
     
    private data_di_nascita:Date;

    private luogo_di_nascita:string;

    private codice_fiscale:string;



   
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
