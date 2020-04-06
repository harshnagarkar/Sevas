import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
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
  ) { }

  logout(){
    this.auth.auth.signOut()
    this.router.navigate(['/login'])
  }

  ngOnInit() {
  }

}
