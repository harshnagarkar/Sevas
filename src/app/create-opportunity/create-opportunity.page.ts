import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user.service';
import { ToastController,AlertController } from '@ionic/angular';
// import { finalize } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-create-opportunity',
  templateUrl: './create-opportunity.page.html',
  styleUrls: ['./create-opportunity.page.scss'],
})

export class CreateOpportunityPage implements OnInit {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  name: string = ""
  image: string = ""
  date: string = ""
  location: string=""
  time: string=""
  description: string=""

  constructor(
    private storage: AngularFireStorage,
    public auth: AngularFireAuth,
    public user: UserService,
    public firestore: AngularFirestore,
    public toastController: ToastController,
    public alert: AlertController,
  ) { }

  submit(){
    console.log(this.image)
    const {name,image,date,location,time,description} = this
    console.log(name,image,date,location,time,description)
    this.firestore.collection(`Opportunities`).add({
      name: name,
      organisation: this.user.getName(),
      image: image,
      date: date,
      location: location,
      time: time,
      description: description,
      uid: this.user.getUID()
    }).then(async res => {
      const toast = await this.toastController.create({
        message: 'Yay! Thanks for giving seva.',
        duration: 2000
      });
      toast.present();

    }, err => 
    this.presentAlert("Something went wrong",err)
    );
    
  }

  async presentAlert(message: string, header: string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["ok"]
    })

    await alert.present()
  }


  fileChange(event){
    console.log("uploading")
    const file = event.target.files[0];
    console.log(event.target.files)
    const filePath = Date.now()+event.target.files[0].name;
    const fileRef = this.storage.ref(filePath);
    const task =  this.storage.upload(filePath, file).then(() => {
      const downloadURL = fileRef.getDownloadURL().subscribe(url => { 
      const Url = url; // for ts
      this.image = url // with this you can use it in the html
      console.log(Url);
  })
})
  }


  ngOnInit() {
  }

}
