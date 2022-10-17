import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Settore } from '../model/settore';
import { SettoreDataEvento } from '../model/settore-data-evento';
import { SupportoPrenotazione } from '../model/supporto-prenotazione';
import { PrenotazioEffettuataService } from '../service/prenotazio-effettuata.service';
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
  errore:any
  utentiInvitati:string[]
  supportoPrenotazione:any;

  constructor(
    private route: ActivatedRoute,
    private serviceUtente: ServiceUtente,
    private serviceSettoreDataEvento: ServiceEventoDataSettoreService,
    private router: Router,
    private fb: FormBuilder,
    private prenotazioneEffettuataService: PrenotazioEffettuataService
  ) {
    this.utentiInvitati=[]
    this.errore=false;
    this.countVal=0;
    this.idSettoreDataEvento = this.route.snapshot.paramMap.get('id');
    this.idUtente = this.serviceUtente.getId();

    this.val=[];

    this.dati = this.fb.group({
      carta: ['', [Validators.required]],
      intestatario: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
      dataScadenza: ['', [Validators.required]]
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
    if(this.settoreDataEvento!=undefined && this.settoreDataEvento.getPostiDisponibili()-1>this.countVal){
      this.countVal++;
      this.val.push(this.countVal);
      this.errore=false;
      this.dati.addControl('codiFiscale'+this.countVal, new FormControl('', Validators.required));
    }else{
      this.errore=true;
    }


 
  }
  diminuisci():void {
    if(this.countVal>0){
      this.errore=false;
      this.val.pop();
      this.dati.removeControl('codiFiscale'+this.countVal)
      this.countVal--;
    } 
  }




  invio(){
    this.codiciFiscali=[]
    for(let i=0;i<this.countVal;i++){
      this.codiciFiscali.push(this.dati.get("codiFiscale"+(i+1))?.value)
    }


    this.supportoPrenotazione=new SupportoPrenotazione(this.idUtente,this.idSettoreDataEvento,this.dati,this.codiciFiscali);
    console.log(this.supportoPrenotazione);

    this.prenotazioneEffettuataService.addNewPrenotazioneEffettuata(this.supportoPrenotazione).subscribe(
      (response:any) => {
        console.log(response)
      },
      (error:any) => {
        console.log(error)
      }
    )


  }


}
