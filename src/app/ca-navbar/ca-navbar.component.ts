import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca-navbar',
  templateUrl: './ca-navbar.component.html',
  styleUrls: ['./ca-navbar.component.css']
})
export class CaNavbarComponent implements OnInit {

  loggato: any

  constructor() {
    

  }
  


  ngOnInit(): void {   
    this.loggato = sessionStorage.getItem('login');   
  }

}
