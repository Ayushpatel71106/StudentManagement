import { Component } from '@angular/core';
import { FormControl, FormGroup,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  fGroup :FormGroup;
  constructor(private _userService:AuthenticationService,private toastr:ToastrService,private _router:Router) {
    this.fGroup = new FormGroup({
      id: new FormControl(0),
      fname: new FormControl(""),
      lname: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      gender: new FormControl(""),
      confirmPassword: new FormControl(""),
    });
  }

  register()
  {
   console.log(this.fGroup.value);
    let userdata  = this.fGroup.value;
    delete userdata .confirmPassword;
    this._userService.signup(userdata).subscribe((response) => {
      if (response) {
        this.toastr.success("Registration", "User registration successfull !");
        console.log(response);
        setTimeout(() => {
          this._router.navigate(["/login"]);
        }, 3000);
      } else {
        this.toastr.error(
          "Registration",
          "User registration not successfull !"
        );
      }
    });

  }

}
