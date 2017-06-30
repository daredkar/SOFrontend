import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginService} from '../services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginservice: LoginService, private route: Router) {}
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const loggedIn: boolean = this.loginservice.getLoggedIn();
    if (localStorage.getItem('loggedIn') === 'true') {
      return true;
    }else {
    console.log("i m in" + loggedIn);
     this.route.navigate(['\login']);
    }
  }
}
