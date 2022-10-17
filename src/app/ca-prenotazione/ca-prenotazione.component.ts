import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  prezzo:number;
  prezzoBiglietto:number;
  date:any;
  


  constructor(
    private route: ActivatedRoute,
    private serviceUtente: ServiceUtente,
    private serviceSettoreDataEvento: ServiceEventoDataSettoreService,
    private router: Router,
    private fb: FormBuilder,
    private prenotazioneEffettuataService: PrenotazioEffettuataService,
    private modalService: NgbModal
  ) {
    this.date = new Date().toISOString().slice(0, 10);
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
    this.prezzo=0;
    this.prezzoBiglietto=0;
    this.serviceSettoreDataEvento
      .getSettoreDataEventoById(this.idSettoreDataEvento)
      .subscribe(
        (response: any) => {
          this.settoreDataEvento = new SettoreDataEvento(response);
          this.prezzoBiglietto=Number(this.settoreDataEvento?.getPrezzoBiglietto()) ;
          this.prezzo+=this.prezzoBiglietto;
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
      this.prezzo+=this.prezzoBiglietto;
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
      this.prezzo-=this.prezzoBiglietto;
    } 
  }




  invio(popOK:any,popNO:any){
    this.codiciFiscali=[]
    for(let i=0;i<this.countVal;i++){
      this.codiciFiscali.push(this.dati.get("codiFiscale"+(i+1))?.value)
    }


    this.supportoPrenotazione=new SupportoPrenotazione(this.idUtente,this.idSettoreDataEvento,this.dati,this.codiciFiscali);
    console.log(this.supportoPrenotazione);

    this.prenotazioneEffettuataService.addNewPrenotazioneEffettuata(this.supportoPrenotazione).subscribe(
      (response:any) => {
        console.log(response)
        this.modalService.open(popOK, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

        }, (reason) => {

        });
      },
      (error:any) => {
        console.log(error)
        this.modalService.open(popNO, { backdrop: false });
      }
    )


  }

  closeModal(popNO:any) {
    this.modalService.dismissAll()
  }


}
