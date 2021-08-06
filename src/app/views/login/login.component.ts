import { Component } from "@angular/core";
import { FormControl, FormGroup, FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from "../../shared/services/authentication.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
})
export class LoginComponent {

  formdata: FormGroup;
  constructor(private _authenticationservice: AuthenticationService,private _router:Router,private _toast:ToastrService) {
    this.formdata = new FormGroup({
      email: new FormControl(""),
      password: new FormControl(""),
    });
  }
  submit()  {
    this._authenticationservice
      .signin(this.formdata.value)
      .subscribe((response: any) => {
        console.log(response);
        if (response.status == "ok") {
          this._authenticationservice.Saveuser(response);
          this._toast
            .success("Login", response.message, {
              easeTime: 1000,
              progressBar: true,
              positionClass: "toast-top-center",
              timeOut: 10000,
            })
            .onHidden.subscribe((e) => {
              this._router.navigate(["/dashboard"]);
            });
        } else {
          this._toast.error("Login", response.message, {
            easeTime: 1000,
            progressBar: true,
            positionClass: "toast-top-center",
            timeOut: 10000,
          });
        }
      });
  }
}
