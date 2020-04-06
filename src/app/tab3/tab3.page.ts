import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  opp = {};
  constructor(
    public firestore: AngularFirestore,
    public user: UserService
  ) {
    this.getAllOpportunities()
  }


  delete(id){
    this.firestore.collection("User").doc(this.user.getUID()).collection("partcipated").doc(id).delete()
    this.firestore.collection("Opportunities").doc(id).collection("partcipated").doc(this.user.getUID()).delete()
  }

  getAllOpportunities(){
    let reference = this.firestore.collection("Opportunities")
    // const m = this.firestore.collection("Opportunities", ref => ref.where('Users','==', '/User/'+this.user.getUID()  )).snapshotChanges();
    let m = this.firestore.collection("User").doc(this.user.getUID()).collection("partcipated").snapshotChanges()   
    m.subscribe(res =>{
      console.log(res)
      let data = {}
      res.forEach(res => {
        const value = res.payload.doc.get("value");
        const id = res.payload.doc.id;
        
        data[id]=value
        // console.log({[id]:value})
      });
      this.opp=data
      console.log(this.opp)
    })
  }
}
