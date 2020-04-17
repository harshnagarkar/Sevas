import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { UserService } from '../user.service';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  opp = {};
  constructor(
    public firestore: AngularFirestore,
    public user: UserService
  ) {
    this.getAllOpportunities()
  }

  partcipate(id){
    console.log(this.opp[id])
    this.firestore.collection("User").doc(this.user.getUID()).collection("partcipated").doc(id).set({
      value:this.opp[id]
    })
    this.firestore.collection("Opportunities").doc(id).collection("partcipated").doc(this.user.getUID()).set({
      email: this.user.getemail()
    })
    this.firestore.collection("User").doc(this.user.getUID()).update({
      jpending: firebase.firestore.FieldValue.increment(1),
      points: firebase.firestore.FieldValue.increment(10)
    })
  }

  getAllOpportunities(){
    const m = this.firestore.collection("Opportunities").snapshotChanges();
    m.subscribe(res =>{
      console.log(res)
      let data = {}
      res.forEach(res => {
        const value = res.payload.doc.data();
        const id = res.payload.doc.id;
        
        data[id]=value
        // console.log({[id]:value})
      });
      this.opp=data
      console.log(this.opp)
    })
  }
}
