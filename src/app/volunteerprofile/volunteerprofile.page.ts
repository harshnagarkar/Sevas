import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AngularFireStorage } from '@angular/fire/storage';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-volunteerprofile',
  templateUrl: './volunteerprofile.page.html',
  styleUrls: ['./volunteerprofile.page.scss'],
})
export class VolunteerprofilePage implements OnInit {
  points: Number= 0
  name: string = ""
  jobsCompleted: Number= 0
  jobsPending: Number=0
  level: string =""
  image: string=""
  downloadURL: Observable<string>;

  constructor(
    public auth: AngularFireAuth,
    public router: Router,
    public firestore: AngularFirestore,
    public user: UserService,
    private storage: AngularFireStorage,
  ) { }

  logout(){
    this.auth.auth.signOut()
    this.router.navigate(['/login'])
  }

  getUserData(){
    const m = this.firestore.collection("User").doc(this.user.getUID()).snapshotChanges();
    m.subscribe(res =>{
    this.image=res.payload.get("profile")
    this.points=res.payload.get("points")
    this.name=res.payload.get("name")
    this.jobsCompleted=res.payload.get("jcp")
    this.jobsPending=res.payload.get("jpending")
    if(this.points<500){
      this.level="copper"
    }else if(this.points<1500){
      this.level="silver"
    }else{
      this.level="gold"
    }
    })

  }

  fileChange(event){
    console.log("uploading")
    const file = event.target.files[0];
    console.log(event.target.files)
    const filePath = Date.now()+event.target.files[0].name;
    const fileRef = this.storage.ref(filePath);
    const task =  this.storage.upload(filePath, file).then(() => {
      fileRef.getDownloadURL().subscribe(url => { 
      const Url = url; // for ts
      this.image = url // with this you can use it in the html
      console.log(Url);
      const m = this.firestore.collection("User").doc(this.user.getUID()).update({
        profile: this.image
      })
  })
})
  }


  ngOnInit() {
    this.getUserData()
  }

}
