import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../common/user';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  constructor(private authService: AuthService , private router : Router) { }

  ngOnInit(): void {
  }
  onClickSubmit(data : User) {

    this.authService.login(data ).subscribe(
      data => {
        console.log(data);
        this.goToHomePage();        
      });
   
 }

 goToHomePage() {

  this.router.navigate(['/index']);
}
}
