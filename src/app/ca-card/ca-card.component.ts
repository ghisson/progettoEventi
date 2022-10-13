import { Component, Input, OnInit } from '@angular/core';
import { SettoreDataEvento } from '../model/settore-data-evento';

@Component({
  selector: 'app-ca-card',
  templateUrl: './ca-card.component.html',
  styleUrls: ['./ca-card.component.css']
})
export class CaCardComponent implements OnInit {

  @Input() settoreDataEvento : any;

  constructor() {
    
   }

  ngOnInit(): void {
    console.log(this.settoreDataEvento)
    console.log(this.settoreDataEvento.getDataEvento().getDataFine())
  }

}
