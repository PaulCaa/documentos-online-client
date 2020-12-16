import { Injectable } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginResponse } from './../models/rest/login-response';
import { Observable } from 'rxjs';
import { UserInterface } from '../models/user.interface';

@Injectable({providedIn: 'root'})
export class LoginService {

    public usuario:Observable<UserInterface>;
    private BASE_URL:string = 'http://localhost:5000/api/login/';

    constructor(
        private httpClient: HttpClient
    ) {}

    login(user: string, pwd: string): Observable<LoginResponse> {
        const md5 = new Md5();
        let hashPwd = md5.appendStr(pwd).end();
        const headers = {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:5000',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
        }
        console.log(this.BASE_URL);
        const req = {
            'User': user,
            'Password': hashPwd
        }
        return this.httpClient.post<LoginResponse>(this.BASE_URL,req, {headers});
    }

    logout() {
        localStorage.removeItem('user');
    }

    validateLogin(): boolean {
        let logState: boolean = false;
        let user: UserInterface = JSON.parse(localStorage.getItem('user'));
        if(user) {
            const token = user['token'];
            console.log(token);
            logState = true
        }
        return logState;
    }

}