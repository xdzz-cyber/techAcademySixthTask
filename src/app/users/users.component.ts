import { Component } from '@angular/core';
import { UsersInterface } from './users.interface';
import { UsersService } from '../users.service';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: UsersInterface[] = [];
  selectedUsers: UsersInterface[] = [];
  filteredUsers: UsersInterface[] = [];
  sortByValue = 'firstname';

  constructor(private userService: UsersService) {
    this.fetchUsers();
  }

  private fetchUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.filteredUsers = data;
    });
  }

  toggleSelect(user: UsersInterface): void {
    const index = this.selectedUsers.indexOf(user);
    if (index >= 0) {
      this.selectedUsers.splice(index, 1);
    } else {
      this.selectedUsers.push(user);
    }
  }

  onDeleteSelected(): void {
    this.users = this.users.filter(user => !this.selectedUsers.includes(user));
    this.filteredUsers = this.filteredUsers.filter(user => !this.selectedUsers.includes(user));
    this.selectedUsers = [];
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    if (!filterValue) {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter(user =>
        user.firstName.toLowerCase().includes(filterValue.toLowerCase())
        || user.lastName.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
  }

  onSort(): void {
    if (this.sortByValue === 'firstname') {
      this.filteredUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
      this.sortByValue = 'lastname';
    } else if (this.sortByValue === 'lastname') {
      this.filteredUsers.sort((a, b) => a.lastName.localeCompare(b.lastName));
      this.sortByValue = 'firstname';
    }
  }

  selectAll(event: MatCheckboxChange): void {
    if (event.checked) {
      this.selectedUsers = [...this.filteredUsers];
    } else {
      this.selectedUsers = [];
    }
  }
}
