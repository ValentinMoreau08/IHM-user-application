import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from 'src/app/home/user-list/user-list.component';
import { ResourceListComponent } from 'src/app/home/resource-list/resource-list.component';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, UserListComponent, ResourceListComponent]
})
export class HomePageModule {}
