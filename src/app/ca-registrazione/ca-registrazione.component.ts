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

  constructor(private fb: FormBuilder, private serviceUtente: ServiceUtente,
    private router: Router) {
      
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

  }
  ngOnInit(): void {
  }


  invio(): void {

    this.utente = new Utente(this.dati);
    this.serviceUtente.creaUtente(this.utente).subscribe(
      (response:any) => {
        this.router.navigate(['/login'])
      },
      (error:any) => {
      }
    )
  }

}
