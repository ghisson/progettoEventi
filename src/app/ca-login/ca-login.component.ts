import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceUtente } from '../service/service-utente';

@Component({
  selector: 'app-ca-login',
  templateUrl: './ca-login.component.html',
  styleUrls: ['./ca-login.component.css']
})
export class CaLoginComponent implements OnInit {

  dati: FormGroup;
  errore: boolean

  idUtente:any;

  constructor(private fb: FormBuilder, private router: Router, private serviceUtente: ServiceUtente) {
    this.dati = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
    this.errore = false;
    this.idUtente = this.serviceUtente.getId();
    console.log(this.idUtente)
    if(this.idUtente!=null && this.idUtente!=0){
      this.router.navigate(['/home']);
    }


  }


  ngOnInit(): void {
  }

  invio(): void {

    this.serviceUtente.login(this.dati.get("email")?.value, this.dati.get("password")?.value).subscribe(
      (response: any) => {
        this.serviceUtente.setId(response.idUtente);
        this.serviceUtente.setLoggato();
        this.errore = false;
        this.serviceUtente.isUserLoggedIn.next(true);
        this.router.navigate(['/home']);

      },
      (error: any) => {
        this.errore = true;
        this.serviceUtente.isUserLoggedIn.next(false);
      }
    )
    //sessionStorage.setItem("login", "true");
    //this.router.navigate(['/home'])
  }

}
