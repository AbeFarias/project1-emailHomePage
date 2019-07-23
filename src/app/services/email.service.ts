import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})

export class EmailService {
    constructor(private readonly rest: RestService, private readonly auth: AuthService) {}
    getEmails(userId: number){
        return this.rest.get(environment.apiURL + '/emails/?userID=' + this.auth.getUserId());

    }
}