import {Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { first } from 'rxjs/operators'
interface user {
    email: string,
    uid: string
}

@Injectable()
export class UserService{
    private user;

    constructor (private auth: AngularFireAuth){}

    setUser(user: user){
        this.user = user;
    }

    getUID(){
        return this.user.uid
    }

    getemail(){
        return this.user.email;
    }

    async isAuthenticated() {
		if(this.user) return true

		const user = await this.auth.authState.pipe(first()).toPromise()

		if(user) {
			this.setUser({
				email: user.email,
				uid: user.uid
			})

			return true
		}
		return false
    }
    

}