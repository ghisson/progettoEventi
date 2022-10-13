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

  constructor() {
    if (sessionStorage.getItem("login")==null) {
      sessionStorage.setItem("login", "false");
    }
  }
}
