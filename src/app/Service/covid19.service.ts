import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {
  private apiUrl = 'https://api.covid19api.com';
  
  constructor(private httpClient: HttpClient) { }

  getCovid19Data(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl+'/summary');
  }

  getMoroccoCovid19Data(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl+'/country/morocco');
  }
}
