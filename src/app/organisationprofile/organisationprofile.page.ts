import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import { UserService } from '../user.service';
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
    public user: UserService
  ) { }

  points: Number= 0
  name: string = ""
  jobsPosted: Number= 0
  jobsPending: Number=0
  level: string=""

  getUserData(){
    const m = this.firestore.collection("User").doc(this.user.getUID()).snapshotChanges();
    m.subscribe(res =>{
    this.points=res.payload.get("points")
    this.name=res.payload.get("name")
    this.jobsPosted=res.payload.get("jcp")
    this.jobsPending=res.payload.get("jpending")
    this.level=res.payload.get("level")
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
