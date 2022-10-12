import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ca-login',
  templateUrl: './ca-login.component.html',
  styleUrls: ['./ca-login.component.css']
})
export class CaLoginComponent implements OnInit {

  dati: FormGroup;


  constructor(private fb: FormBuilder,private router: Router) {
    this.dati = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  }

  
  ngOnInit(): void {
  }

  invio(): void {
    console.log("invio")
    console.log(this.dati.value)
    sessionStorage.setItem("login", "true");
    this.router.navigate(['/home'])
  }

}
