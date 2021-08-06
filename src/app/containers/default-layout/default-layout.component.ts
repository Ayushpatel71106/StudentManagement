import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  userInfo:any;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  constructor(private _router:Router,private _authoService:AuthenticationService){
    this.userInfo = this._authoService.GetSavedUser();
  }

  logout()
  {
    this._router.navigate(["/login"]);
  }


}
