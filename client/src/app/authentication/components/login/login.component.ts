import { Subscription } from 'rxjs';
import { UserInfoService } from 'src/app/services/user-info.service';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit, OnDestroy {
  loginFrom: FormGroup;
  loginSubscription: Subscription;
  registerSubscription: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private userInfoService: UserInfoService
  ) { }

  ngOnInit() {
    localStorage.clear();
    this.userInfoService.clear();
    this.loginFrom = new FormGroup({
      username: new FormControl('admin', Validators.required),
      currentPassword: new FormControl('0000', Validators.required)
    });
  }

  public login(): void {
    this.loginSubscription = this.authenticationService
      .login(this.loginFrom.value.username, this.loginFrom.value.password)
      .subscribe((response: any) => {
        delete localStorage.token;
        localStorage.token = response.token;
        delete localStorage.name;
        localStorage.username = this.loginFrom.value.username;
        this.userInfoService.setUserInfo();
        this.router.navigate(['/food-planner']);
      });
  }

  public register(): void {
    this.registerSubscription = this.authenticationService
      .register(this.loginFrom.value.username, this.loginFrom.value.password)
      .subscribe((response: any) => {
        delete localStorage.token;
        localStorage.token = response.token;
        delete localStorage.name;
        localStorage.username = this.loginFrom.value.username;
        this.userInfoService.setUserInfo();
        this.router.navigate(['/food-planner']);
      });
  }

  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
    if (this.registerSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}
