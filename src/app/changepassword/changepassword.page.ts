import { Component, OnInit } from '@angular/core';
import { ToastController,AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
 password: string =""
 confirmpassword: string =""
  constructor(
    public auth: AngularFireAuth,
    public toastController: ToastController,
    public alert: AlertController,
    public router: Router,
    public user: UserService
  ) { }

  passwordChange(){
    const {password,confirmpassword}=this
    if(password!==confirmpassword){
      console.error("Passwords don't match")
      this.presentAlert("Passwords dont match","Error")
    }else{
      this.auth.auth.currentUser.updatePassword(confirmpassword).then(res=>{
        this.showToast()
        this.password=""
        this.confirmpassword=""
      }).catch(res=>{
        this.presentAlert("Something went wrong","Error")
      })
      
    }
  }

  async showToast(){
    const toast= await this.toastController.create({
      message: 'Your password has been reset.',
      duration: 2000
    })
    toast.present()
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
