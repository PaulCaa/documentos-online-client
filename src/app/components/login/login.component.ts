import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { LoginResponse } from './../../models/rest/login-response';
import { HeaderInterface } from 'src/app/models/rest/header.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public loginState: boolean = true;
  public loginForm: FormGroup;
  private header: HeaderInterface;

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
    this.loginService.validateLogin(input.username,input.password)
    .subscribe(result => {
      let response: LoginResponse = result;
      if(response.header.resultCode.toLocaleLowerCase() == 'ok') {
        this.router.navigate(['buscar']);
      }
    },
      error => console.error(error)
    );
  }

}
