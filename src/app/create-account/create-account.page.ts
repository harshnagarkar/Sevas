import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import { ToastController,AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  email: string = ""
  name: string = ""
  password: string = ""
  confirmpassword: string = ""
  usertype: string=""


  constructor(
    
    public auth: AngularFireAuth,
    public toastController: ToastController,
    public alert: AlertController,
    public router: Router,
    public firestore: AngularFirestore,
    public user: UserService
    ) { }

  async signup(){
    const {email,name,password,confirmpassword,usertype} = this
    if(password!==confirmpassword){
      console.error("Passwords don't match")
      this.presentAlert("Passwords dont match","Error")
    }else{
    try{
      const res = await this.auth.auth.createUserWithEmailAndPassword(email,password);
      this.firestore.doc(`/User/${res.user.uid}`).set({
        email: email,
        usertype: usertype,
        name: name,
        points: 100,
        jcp: 0,
        jpending: 0,
        profile: ""
      })

      console.log(usertype);
      console.log(res)
      const toast = await this.toastController.create({
        message: 'Your account has been created.',
        duration: 2000
      });
      toast.present();
      this.router.navigate(['/login'])
    }catch(err){
      console.dir(err)
    }
  }
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
