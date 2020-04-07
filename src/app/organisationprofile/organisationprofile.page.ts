import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import { UserService } from '../user.service';
import {Observable} from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-organisationprofile',
  templateUrl: './organisationprofile.page.html',
  styleUrls: ['./organisationprofile.page.scss'],
})
export class OrganisationprofilePage implements OnInit {

  constructor(
    public auth: AngularFireAuth,
    public router: Router,
    public firestore: AngularFirestore,
    public user: UserService,
    private storage: AngularFireStorage,
  ) { }

  points: Number= 0
  name: string = ""
  jobsPosted: Number= 0
  jobsPending: Number=0
  level: string=""
  image: string=""
  downloadURL: Observable<string>;

  getUserData(){
    const m = this.firestore.collection("User").doc(this.user.getUID()).snapshotChanges();
    m.subscribe(res =>{
      this.image=res.payload.get("profile")
    this.points=res.payload.get("points")
    this.name=res.payload.get("name")
    this.jobsPosted=res.payload.get("jcp")
    this.jobsPending=res.payload.get("jpending")
    this.level=res.payload.get("level")
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

  logout(){
    this.auth.auth.signOut()
    this.router.navigate(['/login'])
  }

  ngOnInit() {
    this.getUserData()
  }

}
