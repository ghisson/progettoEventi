import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Evento } from '../model/evento';
import { SettoreDataEvento } from '../model/settore-data-evento';
import { ServiceEventoDataSettoreService } from '../service/service-evento-data-settore.service';
import { ServiceEventoService } from '../service/service-evento.service';

@Component({
  selector: 'app-ca-home',
  templateUrl: './ca-home.component.html',
  styleUrls: ['./ca-home.component.css']
})
export class CaHomeComponent implements OnInit {

  date:any;
  settoreDataEvento:SettoreDataEvento[];
  categorie:string[]
  dati: FormGroup;


  constructor(private fb: FormBuilder,private serviceSettoreDataEvento: ServiceEventoDataSettoreService,private serviceEvento: ServiceEventoService) { 
    this.date = new Date().toISOString().slice(0, 10);
    this.settoreDataEvento=[];
    this.categorie=[];

    this.dati = this.fb.group({
      categoria: [''],
      autore: [''],
      dataInizio: [''],
      dataFine: ['']
    })

  }

  ngOnInit(): void {
    this.serviceEvento.getAllCategorie().subscribe(
      (response: any) => {
        for (let i in response) {
          this.categorie.push(response[i])
        }
      },
      (error: any) => {
        
      }
    )

    this.serviceSettoreDataEvento.getAllSettoreDataEventoActive().subscribe(
      (response: any) => {
        for (let i in response) {
          this.settoreDataEvento.push(new SettoreDataEvento(response[i]))
        }
      },
      (error: any) => {
        
      }

    )
  }

  invio(){
    console.log(this.dati.get("dataInizio")?.value);
    this.settoreDataEvento=[];
    this.serviceSettoreDataEvento.getAllSettoreDataEventoActiveByFilter(this.dati.value).subscribe(
      (response: any) => {

        for (let i in response) {
          this.settoreDataEvento.push(new SettoreDataEvento(response[i]))
        }
      },
      (error: any) => {
        
      }
    )
  }

  resettaFiltri(){
    this.dati.reset();
    this.settoreDataEvento=[];
    this.serviceSettoreDataEvento.getAllSettoreDataEventoActive().subscribe(
      (response: any) => {
        for (let i in response) {
          this.settoreDataEvento.push(new SettoreDataEvento(response[i]))
        }
      },
      (error: any) => {
        
      }
    )
  }

}
