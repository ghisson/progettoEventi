import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrenotazioneEffettuata } from '../model/prenotazione-effettuata';
import { Utente } from '../model/utente';
import { ServiceUtente } from '../service/service-utente';

@Component({
  selector: 'app-ca-profilo',
  templateUrl: './ca-profilo.component.html',
  styleUrls: ['./ca-profilo.component.css']
})
export class CaProfiloComponent implements OnInit {

  idUtente:any;
  nomeU:any;
  cognomeU:any;
  codiceFiscaleU:any;
  dataNascitaU:any;
  emailU:any;
  luogoNascitaU:any;
  genereU:any;
  today:Date;
  prenotazioniEffettuate:PrenotazioneEffettuata[];
  constructor(private router: Router,private serviceUtente: ServiceUtente) {
    this.idUtente = this.serviceUtente.getId();
    this.prenotazioniEffettuate=[];
    this.today=new Date();
    if(this.idUtente==0){
      this.router.navigate(['/login']);
    }
    this.serviceUtente.getUtenteById(this.idUtente).subscribe(
      (response: any) => {
        console.log(response)
        this.nomeU=response.nome;
        this.cognomeU=response.cognome;
        this.dataNascitaU=response.data_di_nascita;
        this.luogoNascitaU=response.luogo_di_nascita;
        this.codiceFiscaleU=response.codice_fiscale;
        this.emailU=response.email;
        this.genereU=response.genere;
        for(let i=0; i< response.prenotazioniEffettuate.length; i++){
          this.prenotazioniEffettuate.push(new PrenotazioneEffettuata(response.prenotazioniEffettuate[i]))
        }
        console.log(this.prenotazioniEffettuate);
      },
      (error: any) => {
        
      }
    );
   }

  ngOnInit(): void {
  }

}
