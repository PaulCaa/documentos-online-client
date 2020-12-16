import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { UserInterface } from '../../../models/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user: string;
  public company: string;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loadUserInfo();
  }

  loadUserInfo() {
    let user: UserInterface = JSON.parse(localStorage.getItem('user'));
    if(user) {
      this.user = user['apellido'] + ', ' + user['nombre'];
      this.company = user['nombreEmpresa'];
    }
  }

  closeSession() {
    this.loginService.logout();
    this.router.navigate(['login']);
  }

}
