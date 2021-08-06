import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MyIntercepterService implements HttpInterceptor{

  constructor(private _autho:AuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token=this._autho.GetSavedUser();
    if(token!=null)
    {
    token=token!=null?token.token:null;
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return next.handle(req.clone({headers:httpheaders }));
  }
  else{
    return next.handle(req);
  }
  }
}
