import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const baseUrl:string="http://localhost:8080/settoreDataEvento"


@Injectable()
export class ServiceEventoDataSettoreService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",
    } ), 
  };

  constructor(private http: HttpClient) { }

  getAllSettoreDataEventoActive():Observable<any> {   
    return this.http.get<any>(baseUrl+'/getAllActive');
  }

  getAllSettoreDataEventoActiveByFilter(filtro:any):Observable<any> {   
    return this.http.post<any>(baseUrl+'/getAllByFilter',filtro,this.httpOptions);
  }
  getSettoreDataEventoById(id:any):Observable<any>{
    return this.http.get<any>(baseUrl+'/getSettoreDataEvento/'+id);
  }
}
