import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Utente } from "../model/utente";
import { Injectable } from '@angular/core';
import { Observable, observable } from "rxjs";

const baseUrl:string="http://localhost:8080/utente"


@Injectable()
export class ServiceUtente {
    
    
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          "Access-Control-Allow-Origin": "*",
        } ), 
    };

    constructor(private http: HttpClient) {
    }

    creaUtente(utente:Utente):Observable<any> {
       
        return this.http.post<any>(baseUrl+'/addUtente', utente,this.httpOptions);
    }
}
