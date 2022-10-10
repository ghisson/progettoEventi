import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Utente } from "../model/utente";
import { Injectable } from '@angular/core';

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

    creaUtente(utente:Utente):void{
       
        this.http.post<any>(baseUrl+'/addUtente', utente,this.httpOptions).subscribe(
            (response) => {                           //Next callback
              console.log('response received')
              console.log(response)
            },
            (error) => {                              //Error callback
              console.error('error caught in component')
              console.log(error)
              console.log(error.status)
              //throw error;   //You can also throw the error to a global error handler
            }
          );
    }
}
