import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let user: UserInterface = JSON.parse(localStorage.getItem('user'));
    if(!user) {
      return next.handle(req);
    }
    // si está logueado se crea header con token de usuario
    const headers = req.clone({
      headers: req.headers.set('Authorization',`Bearer ${user["token"]}`)
    });
    return next.handle(headers);
  }
}
