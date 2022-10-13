import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const baseUrl:string="http://localhost:8080/settoreDataEvento"


@Injectable()
export class ServiceEventoDataSettoreService {

  constructor(private http: HttpClient) { }

  getAllSettoreDataEventoActive():Observable<any> {   
    return this.http.get<any>(baseUrl+'/getAll');
  }
}
