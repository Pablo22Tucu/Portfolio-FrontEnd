import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfportfolioService {
  url: string = "http://localhost:3000/api/infportfolio";

  constructor(private http: HttpClient) { }

  obtenerInfPortfolio(): Observable<any> {
    return this.http.get<any>(this.url + "persona");
  }
}
