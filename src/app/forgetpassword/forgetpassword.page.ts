import { Component, OnInit } from '@angular/core';
import { ToastController,AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.page.html',
  styleUrls: ['./forgetpassword.page.scss'],
})
export class ForgetpasswordPage implements OnInit {
  email:string=""
  constructor(
    public auth: AngularFireAuth,
    public toastController: ToastController,
    public router: Router,
    public alert: AlertController,
  ) { }

  async submit(){
    const {email}=this
    this.auth.auth.sendPasswordResetEmail(email).then(res=>{
      this.showToast()
      this.router.navigate(['/login'])
    }).catch(res=>{
      this.presentAlert("Email was not found","Error")
    })
  }

  async showToast(){
    const toast = await this.toastController.create({
      message: 'Forgot password email has been send',
      duration: 2000
    });
    toast.present();
  }


  async presentAlert(message: string, header: string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["ok"]
    })

    await alert.present()
  }

  ngOnInit() {
  }

}
