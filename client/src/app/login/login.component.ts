import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginFrom: FormGroup;
  loginSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    localStorage.clear();
    this.loginFrom = new FormGroup({
      username: new FormControl('admin', Validators.required),
      currentPassword: new FormControl('00000', Validators.required)
    });
  }

  public login(): void {
    this.loginSubscription = this.authService.login(this.loginFrom.value.username, this.loginFrom.value.password)
      .subscribe((response: any) => {
        delete localStorage.token;
        localStorage.token = response.token;
        console.log(localStorage.token);
        delete localStorage.name;
        localStorage.username = this.loginFrom.value.username;
        console.log(localStorage.username);
        this.router.navigate(['']);
      });
  }

  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}