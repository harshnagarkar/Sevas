import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  opp = {};
  constructor(
    public firestore: AngularFirestore,
  ) {
    this.getAllOpportunities()
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
