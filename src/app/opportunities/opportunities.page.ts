import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { element } from "protractor";
import { UserService } from "../user.service";
import * as firebase from "firebase/app";
@Component({
  selector: "app-opportunities",
  templateUrl: "./opportunities.page.html",
  styleUrls: ["./opportunities.page.scss"],
})
export class OpportunitiesPage implements OnInit {
  opp = {};
  constructor(public firestore: AngularFirestore, public user: UserService) {}

  getAllOpportunities() {
    const m = this.firestore
      .collection("Opportunities", (ref) =>
        ref.where("uid", "==", this.user.getUID())
      )
      .snapshotChanges();
    m.subscribe((res) => {
      console.log(res);
      let data = {};
      res.forEach((res) => {
        let value = res.payload.doc.data();
        const id = res.payload.doc.id;

        const m = this.firestore
          .collection("Opportunities")
          .doc(id)
          .collection("partcipated")
          .snapshotChanges();
        m.subscribe((resd) => {
          value["pcount"] = resd.length;
        });
        data[id] = value;
      });
      this.opp = data;
      console.log(this.opp);
    });
  }

  deleteOpportunity(id) {
    console.log(id);
    this.firestore.collection("Opportunities",ref => ref.where('uid','==', this.user.getUID() )).doc(id).delete()
    const m = this.firestore.collection("User",ref => ref.where('usertype','==',"Volunteer" )).get();
    m.forEach(res=>{
      res.docs.forEach(resd=>{
        console.log(resd.id)
        this.firestore.collection("User").doc(resd.id).collection("partcipated").doc(id).delete().then(d=>{
                    this.firestore
          .collection("User")
          .doc(resd.id)
          .update({
            jpending: firebase.firestore.FieldValue.increment(-1),
            jcp: firebase.firestore.FieldValue.increment(1),
          });
          this.firestore
          .collection("User")
          .doc(this.user.getUID())
          .update({
            jpending: firebase.firestore.FieldValue.increment(-1),
            jcp: firebase.firestore.FieldValue.increment(1),
          });

        }).catch(res=>{
          console.log("erro",res)
        })
      })
    })
  }

  ngOnInit() {
    this.getAllOpportunities();
  }
}
