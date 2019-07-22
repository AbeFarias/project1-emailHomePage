import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    constructor(
        private readonly auth: AuthGuardService,
        private readonly router: Router
    ) {}

    canActivate(): boolean {
        if (this.auth.getUserId()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

}