
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/api/user.service';
import { ResourceService } from 'src/app/api/resource.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public userList$;
  public resourceList$;

  constructor(
    public userService: UserService,
    public resourceService: ResourceService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.userList$ = this.userService.getUserList();
    this.resourceList$ = this.resourceService.getResourceList();
  }

  async goToUserDetail(id: number){
    sessionStorage.setItem('userId', String(id));
    await this.router.navigateByUrl('user-detail');
  }

  async goToResourceDetail(id: number){
    sessionStorage.setItem('resourceId', String(id));
    await this.router.navigateByUrl('resource-detail');
  }

  async goToCreateUser(){
    await this.router.navigateByUrl('create-user');
  }

}
