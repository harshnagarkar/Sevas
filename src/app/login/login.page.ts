import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth, firestore } from 'firebase/app';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = ""
  password: string = ""

  constructor(
    public auth: AngularFireAuth,
    public firestore: AngularFirestore,
    public user: UserService) { }

  async login(){
    const {email,password} = this
    try{
      const res = await this.auth.auth.signInWithEmailAndPassword(email,password);
      this.firestore.doc(`/User/${res.user.uid}`)
      if(res.user){
        this.user.setUser({
          email,
          uid: res.user.uid
        });
      }
      console.log(res)
      // const data = this.store

    }catch(err){
      console.dir(err)
    }
  }

  ngOnInit() {
  }

}
