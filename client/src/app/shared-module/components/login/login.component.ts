import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
  loginFrom: FormGroup;
  loginSubscription: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    localStorage.clear();
    this.loginFrom = new FormGroup({
      username: new FormControl("admin", Validators.required),
      currentPassword: new FormControl("00000", Validators.required)
    });
  }

  public login(): void {
    this.loginSubscription = this.authenticationService
      .login(this.loginFrom.value.username, this.loginFrom.value.password)
      .subscribe((response: any) => {
        delete localStorage.token;
        localStorage.token = response.token;
        console.log(localStorage.token);
        delete localStorage.name;
        localStorage.username = this.loginFrom.value.username;
        console.log(localStorage.username);
        this.router.navigate([""]);
      });
  }

  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}
