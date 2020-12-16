import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { LoginResponse } from './../../models/rest/login-response';

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
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    let input = {
      username: '',
      password: ''
    }
    input = this.loginForm.value;
    // Se llama al login solo si no se recibe user y pwd vacios
    if(input.username.length > 0  && input.password.length > 0){
      this.loginService.validateLogin(input.username,input.password)
      .subscribe(result => {
        let response: LoginResponse = result;
        console.log(response);
        if(response.header.resultCode.toLocaleLowerCase() == 'ok') {
          this.router.navigate(['documentos']);
        } else {
          this.loginFail = true;
        }
      },
        error => console.error(error)
      );
    } else {
      this.loginFail = true;
    }
  }

}
