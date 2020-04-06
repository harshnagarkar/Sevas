import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
@Component({
  selector: 'app-volunteerprofile',
  templateUrl: './volunteerprofile.page.html',
  styleUrls: ['./volunteerprofile.page.scss'],
})
export class VolunteerprofilePage implements OnInit {

  constructor(
    public auth: AngularFireAuth,
    public router: Router,
    public firestore: AngularFirestore,
  ) { }

  logout(){
    this.auth.auth.signOut()
    this.router.navigate(['/login'])
  }


  ngOnInit() {
  }

}
