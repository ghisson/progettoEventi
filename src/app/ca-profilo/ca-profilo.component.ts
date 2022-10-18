import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrenotazioneEffettuata } from '../model/prenotazione-effettuata';
import { Utente } from '../model/utente';
import { PrenotazioEffettuataService } from '../service/prenotazio-effettuata.service';
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
  utentiInvitati:any;
  utInv:any;
  ut:any;
  prenotazioneAttiva:any
  dati: FormGroup;


  prenotazioniEffettuate:PrenotazioneEffettuata[];
  constructor(private router: Router,private serviceUtente: ServiceUtente, private modalService: NgbModal,private fb: FormBuilder, private servicePrenotazioneEffettuata:PrenotazioEffettuataService) {
    this.idUtente = this.serviceUtente.getId();
    this.prenotazioniEffettuate=[];
    this.utInv=[];
    this.today=new Date();
    if(this.idUtente==0){
      this.router.navigate(['/login']);
    }

    this.dati = this.fb.group({
      recensione: ['', [Validators.required]],
      votoRecensione: ['', [Validators.required]]
    })


    this.serviceUtente.getUtenteById(this.idUtente).subscribe(
      (response: any) => {
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
      },
      (error: any) => {
        
      }
    );
   }

  ngOnInit(): void {
  }

  getUtentiInvitati(id:any){
    this.ut="";
    for (let x=0; x<this.prenotazioniEffettuate.length; x++){ 
      if(this.prenotazioniEffettuate[x].getIdPrenotazioneEffettuata()===id){
        this.utInv=this.prenotazioniEffettuate[x].getUtentiInvitati();
        for (let i=0; i<this.utInv.length; i++){
          this.ut+=this.utInv[i] + ", \n";
        }
        break;
      }
    }
    if(this.ut===""){
      this.ut="Non è stato invitato nessun utente per questa prenotazione"
    }
    return this.ut;
  }


  apriModal(id:any,popNO:any){
    for(let i=0;i<this.prenotazioniEffettuate.length;i++){
      if(this.prenotazioniEffettuate[i].getIdPrenotazioneEffettuata()===id){
        this.prenotazioneAttiva=this.prenotazioniEffettuate[i];
        break;
      }
    }
    this.modalService.open(popNO, { backdrop: false }).result.then((result) => {

    }, (reason) => {

    });
  }


  invio(modal:any){


    this.servicePrenotazioneEffettuata.addRecensione(this.prenotazioneAttiva.getIdPrenotazioneEffettuata(),this.dati.value).subscribe(
      (response: any) => {
        


        this.serviceUtente.getUtenteById(this.idUtente).subscribe(
          (response: any) => {
            this.prenotazioniEffettuate=[];
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
            modal.dismiss();

          },
          (error: any) => {
            
          }
        );



      },
      (error: any) => {
        
      }
    );
    
  }

  chiudiPopUp(modal:any){
    this.dati.reset();
    modal.dismiss();
  }

}
