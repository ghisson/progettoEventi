import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SupportoPrenotazione } from '../model/supporto-prenotazione';



const baseUrl:string="http://localhost:8080/prenotazioneEffettuata"


@Injectable()
export class PrenotazioEffettuataService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",
    } ), 
  };

  constructor(private http: HttpClient) { }


  addNewPrenotazioneEffettuata(sp:SupportoPrenotazione):Observable<any> {   
    return this.http.post<any>(baseUrl+'/addPrenotazioneEffettuata',sp,this.httpOptions);
  }

  addRecensione(id:any,dati:any):Observable<any> {   
    return this.http.post<any>(baseUrl+'/addRecensione/'+id,dati,this.httpOptions);
  }

  getMediaRecensioni(id:any) {
    return this.http.get<any>(baseUrl+'/getPrenotazioneEffettuataByIdEvento/'+id);
  }

}
