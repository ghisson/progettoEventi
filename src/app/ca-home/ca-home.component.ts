import { Component, OnInit } from '@angular/core';
import { Evento } from '../model/evento';
import { SettoreDataEvento } from '../model/settore-data-evento';
import { ServiceEventoDataSettoreService } from '../service/service-evento-data-settore.service';

@Component({
  selector: 'app-ca-home',
  templateUrl: './ca-home.component.html',
  styleUrls: ['./ca-home.component.css']
})
export class CaHomeComponent implements OnInit {

  date:any;
  settoreDataEvento:SettoreDataEvento[];

  constructor(private serviceSettoreDataEvento: ServiceEventoDataSettoreService) { 
    this.date = new Date().toISOString().slice(0, 10);
    this.settoreDataEvento=[];
  }

  ngOnInit(): void {
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
