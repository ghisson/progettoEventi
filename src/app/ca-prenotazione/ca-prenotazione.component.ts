import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Settore } from '../model/settore';
import { SettoreDataEvento } from '../model/settore-data-evento';
import { ServiceEventoDataSettoreService } from '../service/service-evento-data-settore.service';
import { ServiceUtente } from '../service/service-utente';

@Component({
  selector: 'app-ca-prenotazione',
  templateUrl: './ca-prenotazione.component.html',
  styleUrls: ['./ca-prenotazione.component.css'],
})
export class CaPrenotazioneComponent implements OnInit {
  dati: FormGroup;
  idSettoreDataEvento: any;
  idUtente: any;
  settoreDataEvento: SettoreDataEvento | undefined;
  countVal:number;
  val:number[];
  codiciFiscali:any;

  constructor(
    private route: ActivatedRoute,
    private serviceUtente: ServiceUtente,
    private serviceSettoreDataEvento: ServiceEventoDataSettoreService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.countVal=0;
    this.idSettoreDataEvento = this.route.snapshot.paramMap.get('id');
    this.idUtente = this.serviceUtente.getId();

    this.val=[];

    this.dati = this.fb.group({
      
    });
    this.codiciFiscali=this.dati.get("codiciFiscali") as FormArray 

    this.serviceSettoreDataEvento
      .getSettoreDataEventoById(this.idSettoreDataEvento)
      .subscribe(
        (response: any) => {
          this.settoreDataEvento = new SettoreDataEvento(response);
          console.log(this.settoreDataEvento);
        },
        (error: any) => {
          this.router.navigate(['/home']);
        }
      );
  }

  ngOnInit(): void {
    
  }

  aumenta():void {
    this.countVal++;
    this.val.push(this.countVal);
    this.dati.addControl('codiFiscale'+this.countVal, new FormControl('', Validators.required));
    


 
  }
  diminuisci():void {
    if(this.countVal>0){
      this.val.pop();
      this.dati.removeControl('codiFiscale'+this.countVal)
      this.countVal--;
    } 
  }




  invio(){
    console.log(this.dati.value)
  }


}
