import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  canActivate() {
    if(!this.loginService.validateLogin()){
      console.log('Login not found');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
