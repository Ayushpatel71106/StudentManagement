import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../../utils/base-url";
import { Endpoint } from "../../utils/endpoint";
@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(private _http: HttpClient) {}
Saveuser(userInfo)
{
  localStorage.setItem("autho_access",JSON.stringify(userInfo));
}

  GetSavedUser()
  {
    if(localStorage.getItem("autho_access")== null)
    {
      return null;
    }else{
      return JSON.parse(localStorage.getItem("autho_access"));
    }

  }

  signin(user) {
    return this._http.post(`${BASE_URL}${Endpoint.LOGIN}`, user);
  }
  signup(user) {
   return this._http.post(`${BASE_URL}${Endpoint.SIGNUP}`,user);
  }
}
