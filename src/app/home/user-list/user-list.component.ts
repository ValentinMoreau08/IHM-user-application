import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  @Input()
  userList;

  @Output()
  selectedUser = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  selectUser(id: number) {
    this.selectedUser.emit(id);
  }
}
