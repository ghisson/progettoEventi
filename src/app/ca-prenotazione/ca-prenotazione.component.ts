import { Component, OnInit } from '@angular/core';

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
  idSettoreDataEvento: any;
  idUtente: any;
  settoreDataEvento: SettoreDataEvento | undefined;
  countVal:number;
  val:number[];

  constructor(
    private route: ActivatedRoute,
    private serviceUtente: ServiceUtente,
    private serviceSettoreDataEvento: ServiceEventoDataSettoreService,
    private router: Router
  ) {
    this.countVal=0;
    this.idSettoreDataEvento = this.route.snapshot.paramMap.get('id');
    this.idUtente = this.serviceUtente.getId();
    this.val=[];
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
  }
  diminuisci():void {
    if(this.countVal>0){
      this.val.pop();
      this.countVal--;
    }
    
  }
}
