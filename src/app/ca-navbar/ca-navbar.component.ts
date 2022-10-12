import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceUtente } from '../service/service-utente';

@Component({
  selector: 'app-ca-navbar',
  templateUrl: './ca-navbar.component.html',
  styleUrls: ['./ca-navbar.component.css']
})
export class CaNavbarComponent implements OnInit {

  loggato: any

  constructor(private serviceUtente: ServiceUtente,private router: Router) {
    this.loggato = sessionStorage.getItem("login")

  }
  


  ngOnInit(): void {   
    
  }

  @HostListener('window:storage')
  onStorageChange() {
    console.log("sono entrato")
    this.loggato = sessionStorage.getItem("login")
    if(this.loggato==='true'){
      this.router.navigate(["/"]);
    }
  }

}
