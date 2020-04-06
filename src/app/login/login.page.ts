import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth, firestore } from 'firebase/app';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = ""
  password: string = ""
  usertype: string=""
  name: string=""

  constructor(
    public auth: AngularFireAuth,
    public firestore: AngularFirestore,
    public user: UserService,
    public router: Router
    ) { }

  async login(){
    const {email,password} = this
    try{
      const res = await this.auth.auth.signInWithEmailAndPassword(email,password);
      let m = this.firestore.collection("/User").doc(res.user.uid).snapshotChanges()
      let user = {
        email,
        uid: res.user.uid,
        usertype: "",
        name: ""
      }
      m.subscribe(resd=>{
        console.log(resd.payload.get("usertype"))
        user.usertype=resd.payload.get("usertype")
        user.name= resd.payload.get("name")
        if(res.user){
          this.user.setUser(user);
          console.log(this.user)
          if(this.user.getUserType()==="Organisation"){
            this.router.navigate(["/org"])
    
          }else if(this.user.getUserType()==="Volunteer"){
            this.router.navigate(["/volunteer"])
          }    
        }
      })
     
    }catch(err){
      console.dir(err)
    }
  }

  ngOnInit() {
  }

}
