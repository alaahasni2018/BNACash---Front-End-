import { Component, OnInit  } from '@angular/core';
import { User } from '../common/user';
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
    dateNaissance:null,
    tel: null,
    email: null,
    login: null

  };
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  onClickSubmit(data : User) {

    this.authService.register(data ).subscribe(
      data => {
        console.log(data);
      });
   
 }
}