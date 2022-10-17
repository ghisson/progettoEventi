import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettoreDataEvento } from '../model/settore-data-evento';
import { ServiceUtente } from '../service/service-utente';

@Component({
  selector: 'app-ca-card',
  templateUrl: './ca-card.component.html',
  styleUrls: ['./ca-card.component.css']
})
export class CaCardComponent implements OnInit {

  @Input() settoreDataEvento : any;
  loggato: any
  errore:any;

  constructor(private serviceUtente: ServiceUtente,private router: Router) {
    this.errore=false;
    this.serviceUtente.isUserLoggedIn.subscribe( value => {
      this.loggato=value+"";
    });
    this.loggato = sessionStorage.getItem("login")
   }

  ngOnInit(): void {
  }

  prenota(idSettoreDataEvento:number){
    if(this.loggato==='false'){
      this.errore=true;
    } else {
      this.router.navigate(['/prenotazione/'+idSettoreDataEvento]);
    }
    
  }

}
