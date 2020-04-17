import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { ToastController } from '@ionic/angular';
import { promise } from 'protractor';
@Component({
  selector: 'app-message-center',
  templateUrl: './message-center.page.html',
  styleUrls: ['./message-center.page.scss'],
})
export class MessageCenterPage implements OnInit {
  opp={};
  constructor(
    public firestore: AngularFirestore,
    public user: UserService,
    public toastController: ToastController,
  ) { }

  messagedata:string=""
  opportunityselect:string=""
  subject:string=""

  getOpportunities(){
    const m = this.firestore.collection("Opportunities", ref => ref.where('uid','==', this.user.getUID()  )).snapshotChanges();
    m.subscribe(res =>{
      console.log(res)
      let data = {}
      res.forEach(res => {
        let value = res.payload.doc.get("name");
        const id = res.payload.doc.id;
        data[id]=value
      })
      this.opp=data
      console.log(this.opp)
    })
  }

  async emailProspects(){
    const {messagedata,opportunityselect,subject} = this
    console.log("The email:",opportunityselect," subject: ",subject," message: ",messagedata)
    const m = this.firestore.collection("Opportunities").doc(opportunityselect).collection("partcipated").snapshotChanges();
    m.subscribe(res =>{
      console.log(res)
      let data = []
      res.forEach(res => {
        let value = res.payload.doc.get("email");
        data.push(value)
      })
      this.firestore.collection("mail").add({
        to: this.user.getemail(),
        bcc: data,
        message:{subject:subject,html:messagedata}
      }).then(res=>{
        console.log("sucessfullt emailed",data)
        this.messagedata=""
        this.subject=""
        this.opportunityselect=""
      this.opp=data
      console.log(this.opp)

      })
      })
      
      const toast = await this.toastController.create({
        message: 'Your email is sent to all!',
        duration: 2000,
        position: 'top'
      });
      toast.present()

  }
  
  ngOnInit() {
    this.getOpportunities()
  }


}
