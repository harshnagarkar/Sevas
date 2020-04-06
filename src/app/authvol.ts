import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { UserService } from './user.service'
import { AngularFireAuth } from '@angular/fire/auth'
@Injectable()
export default class AuthVolunteer implements CanActivate{

    constructor(
        private auth: AngularFireAuth,
        public router: Router,
        public user: UserService
    ){}

    async canActivate(route){
        if(await this.user.isAuthenticated()){
            return true;
        }
        return false;
        this.router.navigate(['/login'])
    }
}