import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ObservableInput, takeUntil } from 'rxjs';
import { ServiceUtente } from '../service/service-utente';

@Component({
  selector: 'app-ca-navbar',
  templateUrl: './ca-navbar.component.html',
  styleUrls: ['./ca-navbar.component.css']
})
export class CaNavbarComponent implements OnInit {

  loggato: any;


  constructor(private serviceUtente: ServiceUtente,private router: Router) {
    this.serviceUtente.isUserLoggedIn.subscribe( value => {
      this.loggato=value+"";
    });
    this.loggato = sessionStorage.getItem("login")

  }
  
 
  ngOnInit(): void {   
  }

  logout(){
    this.serviceUtente.setLogout();
    this.serviceUtente.isUserLoggedIn.next(false);
    this.router.navigate(['/home']);
  }
}
