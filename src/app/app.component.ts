import {Component} from '@angular/core';
import {UsersInterface} from "./users/users.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'techAcademyFifthTask';
  createdUser: UsersInterface | null = null;

  userCreatedHandler($event: UsersInterface) {
    this.createdUser = $event;
  }
}
