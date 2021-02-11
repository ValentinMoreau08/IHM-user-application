import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {
  user = {
    name: "",
    job: ""
  }

  constructor(
    public router: Router,
    public userService: UserService,
    public alertCtrl: AlertController
    ) {}

  logForm() {
    this.userService.createUser(this.user.name, this.user.job).subscribe(
      async isAccepted => {
        if (isAccepted) {
          await this.router.navigateByUrl('home');
        }
        else{
          const alert = await this.alertCtrl.create({
            header: 'Alert',
            message: 'Impossible de creer un user avec ce nom ou ce job',
            buttons: ['OK']
          });
          await alert.present();
        }
      }
    );

  }

  

  ngOnInit() {
  }

}
