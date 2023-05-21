import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url = "http://localhost:3000/api/usuarios";
  currentSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    console.log("Servicio de autenticacion listo");
    this.currentSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }
  iniciarSesion(credenciales: any): Observable<any> {
    return this.http.post(this.url, credenciales).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentSubject.next(data);
      return data;
    }));
  }
  get UsuarioAutenticado() {
    return this.currentSubject.value;
  }
}
