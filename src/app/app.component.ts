import { Component, OnInit } from '@angular/core';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  content?: string;


//  ngOnInit(): void {
//    this.userService.getPublicContent().subscribe(
//      data => {
//        this.content = data;
//      },
//      err => {
//        this.content = JSON.parse(err.error).message;
//      }
//   );
//  }
  title = 'BNAcash';
}
