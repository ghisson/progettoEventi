import { Component, OnInit } from '@angular/core';
import { ServiceEventoDataSettoreService } from '../service/service-evento-data-settore.service';

@Component({
  selector: 'app-ca-home',
  templateUrl: './ca-home.component.html',
  styleUrls: ['./ca-home.component.css']
})
export class CaHomeComponent implements OnInit {

  date:any;

  constructor(private serviceSettoreDataEvento: ServiceEventoDataSettoreService) { 
    this.date = new Date().toISOString().slice(0, 10);
  }

  ngOnInit(): void {
    this.serviceSettoreDataEvento.getAllSettoreDataEventoActive().subscribe(
      (response: any) => {
        console.log(response);

      },
      (error: any) => {
        
      }
    )
  }

}
