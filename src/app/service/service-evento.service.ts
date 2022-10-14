import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseUrl:string="http://localhost:8080/evento"


@Injectable()
export class ServiceEventoService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",
    } ), 
};

  constructor(private http: HttpClient) { }

  getAllCategorie():Observable<any> {   
    return this.http.get<any>(baseUrl+'/getAllCategorie');
  }

 
}
