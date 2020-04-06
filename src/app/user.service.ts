import {Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { first } from 'rxjs/operators'
import { AngularFirestore } from '@angular/fire/firestore';
interface user {
    email: string,
    uid: string,
    usertype: string,
    name: string
}

@Injectable()
export class UserService{
    private user;

    constructor (
        private auth: AngularFireAuth,
        public firestore: AngularFirestore,
        ){}

    setUser(user: user){
        this.user = user;
    }

    getUID(){
        return this.user.uid
    }


    getUserType(){
        return this.user.usertype;
    }

    getemail(){
        return this.user.email;
    }

    async isAuthenticated() {
		if(this.user) return true

        const user = await this.auth.authState.pipe(first()).toPromise()
        let data = {}
        if(user) {
        let m = this.firestore.collection("/User").doc(user.uid).snapshotChanges()
        m.subscribe(resd=>{
          this.setUser({
            email: user.email,
            uid: user.uid,
            usertype: resd.payload.get("usertype"),
            name: resd.payload.get("name")
        })

          })
      
			return true
		}
		return false
    }
    

}