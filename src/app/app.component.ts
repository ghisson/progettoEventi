import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Utente } from './model/utente';
import { ServiceUtente } from './service/service-utente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  dati:FormGroup;
  utente:Utente | undefined;

  constructor(private fb:FormBuilder, private serviceUtente:ServiceUtente){
    this.dati=this.fb.group({
      nome: ['', [Validators.required]],
      cognome: ['', [Validators.required]],
      genere: ['', [Validators.required]],
      email:  ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]],
      data_di_nascita: ['', [Validators.required]],
      luogo_di_nascita: ['', [Validators.required]],
      codice_fiscale: ['', [Validators.required]]
      })
      
  }


  invio():void{
    
    this.utente=new Utente(this.dati);

    this.serviceUtente.creaUtente(this.utente);
  }
}
