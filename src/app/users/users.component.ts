import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { UsersInterface } from './users.interface';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnChanges, OnInit{
  @Input() user: UsersInterface | null = null;
  users: UsersInterface[] = [];
  selectedUsers: UsersInterface[] = [];
  filteredUsers: UsersInterface[] = [];
  sortByValue = 'firstname';


  constructor(private _userService: UsersService) {
  }

  private fetchUsers(): void {
    this._userService.getUsers().subscribe(data => {
      this.users = data;
      this.filteredUsers = data;
    });
  }

  ngOnInit() {
     this.fetchUsers();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['user'].currentValue && !this.users.find(user => user.id == changes['user'].currentValue.id)){
      this.filteredUsers.push(changes['user'].currentValue);
    }
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
    if(this.users && this.selectedUsers){
      this.selectedUsers.forEach(selectedUser => {
        this._userService.deleteUser(selectedUser.id).subscribe(data => {
          if(data) throw new Error("User not deleted. Bad id"); // Because the server returns an empty object
        });
      });
      this.users = this.users.filter(user => !this.selectedUsers.includes(user));
      this.filteredUsers = this.filteredUsers.filter(user => !this.selectedUsers.includes(user));
      this.selectedUsers = [];
    }

  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    if (!filterValue && this.filteredUsers && this.users) {
      this.filteredUsers = this.users;
    } else if(this.users){
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
