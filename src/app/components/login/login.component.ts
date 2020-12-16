import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { LoginResponse } from './../../models/rest/login-response';
import { UserInterface } from '../../models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public loginFail: boolean = false;
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let login: boolean = this.loginService.validateLogin();
    if(login){
      this.router.navigate(['documentos']);
    } else {
      this.loginService.logout();
      this.loginForm = this.formBuilder.group({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      });
    }
  }

  login() {
    let input = {
      username: '',
      password: ''
    }
    input = this.loginForm.value;
    // Se llama al login solo si no se recibe user y pwd vacios
    if(input.username.length > 0  && input.password.length > 0){
      this.loginService.login(input.username,input.password)
      .subscribe(
        result => {
          let response: LoginResponse = result;
          if(response.header.resultCode.toLocaleLowerCase() == 'ok') {
            let user: UserInterface = response.data[0];
            localStorage.setItem('user',JSON.stringify(user));
            this.router.navigate(['documentos']);
          } else {
            console.log("error");
            this.loginFail = true;
          }
      },
      error => {
        console.error(error);
        this.loginFail = true;
      });
    } else {
      this.loginFail = true;
    }
  }

}
