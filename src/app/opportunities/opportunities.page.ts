import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { element } from 'protractor';
@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.page.html',
  styleUrls: ['./opportunities.page.scss'],
})
export class OpportunitiesPage implements OnInit {
  
  opp = {};
  constructor(
    public firestore: AngularFirestore,
  ) {}

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

  ngOnInit() {
    this.getAllOpportunities()
  }

}
