import { Subscription } from 'rxjs';

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

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    localStorage.clear();
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
        console.log(localStorage.token);
        delete localStorage.name;
        localStorage.username = this.loginFrom.value.username;
        console.log(localStorage.username);
        this.router.navigate(['/food-planner']);
      });
  }

  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}
