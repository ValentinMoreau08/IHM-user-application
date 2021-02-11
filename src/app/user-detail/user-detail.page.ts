import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {

  public userId: number;
  public userDetail$;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.userId = Number(sessionStorage.getItem('userId'));
    this.userDetail$ = this.userService.getUserDetail(this.userId);
  }

}
