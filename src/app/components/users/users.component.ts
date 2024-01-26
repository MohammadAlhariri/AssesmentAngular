import { Component } from '@angular/core';
import { User} from '../../shared/user.model';
import { map, delay } from 'rxjs/operators';
import { CardComponent } from '../card/card.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/users.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, CardComponent, HttpClientModule],

  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users: User[] = [];
  user: any;
  usersAll:any;
  page = 1;
  current = 1;
  pageSize = 6;
  total = 0;
  searchTerm = '';
  constructor( private userService:UserService) {
  }

   ngOnInit() {
 /*   this.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });*/
    this.pageSize = this.userService.pageSize;
    this.current = this.userService.current;
    this.total = this.userService.total;
    this.getUsers(this.page);
    


  }
  getUsers(page: number) {

    this.userService.getUsers(page).subscribe((users: User[]) => {
      this.usersAll = users;
    });
  }
  getUser() {
    this.usersAll = [];
    this.userService.getUser(Number(this.searchTerm)).subscribe((user: User) => {
      this.usersAll.push(user);
  });}


  // a method to handle the page change event
  pageChanged(n: Number) {
    // update the current page number
    this.page = n == 0 ? this.page -= 1 : this.page += 1;
    this.getUsers(this.page);

    // do any other actions you need
    console.log('Page changed to: ' + this.page);
  }
  search() {
    if (this.searchTerm.length == 0) {
      this.getUsers(this.page);
      return;
    }
this.getUser()
    
  }
}
