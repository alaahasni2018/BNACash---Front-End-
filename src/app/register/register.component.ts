import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    nom: null,
    prenom: null,
    adresse: null,
    tel: null,
    email: null,
    login: null

  };


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { nom, prenom, adresse, tel , email , login } = this.form;

    this.authService.register(nom, prenom, adresse, tel , email , login ).subscribe(
      data => {
        console.log(data);
      },
    );
  }
}