import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfportfolioService {

  constructor(private http:HttpClient) { }

  obtenerInfPortfolio():Observable<any> {
    return this.http.get('./assets/data/data.json');
  }  
}
