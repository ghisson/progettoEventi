import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca-navbar',
  templateUrl: './ca-navbar.component.html',
  styleUrls: ['./ca-navbar.component.css']
})
export class CaNavbarComponent implements OnInit {

  loggato: string | null

  constructor() {
    this.loggato = sessionStorage.getItem("login")
  }



  ngOnInit(): void {
  }

  token():boolean{
    return false
  }

}
