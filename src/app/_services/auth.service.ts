import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const AUTH_API = 'http://localhost:3030/users/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }

  register(nom: string, prenom : string, adresse: string, tel: string, email: string, login: string, ): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      nom,
      prenom,
      adresse,
      tel ,
      email ,
      login
    }, httpOptions);
  }
}
