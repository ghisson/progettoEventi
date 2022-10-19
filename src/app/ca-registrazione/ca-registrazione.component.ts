import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utente } from '../model/utente';
import { ServiceUtente } from '../service/service-utente';

@Component({
  selector: 'app-ca-registrazione',
  templateUrl: './ca-registrazione.component.html',
  styleUrls: ['./ca-registrazione.component.css']
})
export class CaRegistrazioneComponent implements OnInit {

  dati: FormGroup;
  utente: Utente | undefined;
  date:any
  idUtente:any;
  errore:boolean;
  errorone:string;

  constructor(private fb: FormBuilder, private serviceUtente: ServiceUtente,
    private router: Router) {
      this.errore=false;
      this.errorone="";
    
    this.date = new Date().toISOString().slice(0, 10);
    this.dati = this.fb.group({
      nome: ['', [Validators.required]],
      cognome: ['', [Validators.required]],
      genere: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      data_di_nascita: ['', [Validators.required]],
      luogo_di_nascita: ['', [Validators.required]],
      codice_fiscale: ['', [Validators.required]]
    })

    this.idUtente = this.serviceUtente.getId();
    if(this.idUtente!=null && this.idUtente!=0){
      this.router.navigate(['/home']);
    }


  }
  ngOnInit(): void {
  }


  invio(): void {

    this.utente = new Utente(this.dati);
    this.serviceUtente.creaUtente(this.utente).subscribe(
      (response:any) => {
        this.errore=false;
        this.router.navigate(['/login'])
      },
      (error:any) => {
        this.errore=true;
        this.errorone=error.error.error;
      }
    )
  }

}
