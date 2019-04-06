import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginFrom: FormGroup;
  loginSubscription: Subscription

  constructor(private _authservice: AuthService,  private _router: Router) { }

  ngOnInit() {
    this.loginFrom = new FormGroup({
      username: new FormControl('admin', Validators.required),
      password: new FormControl('00000', Validators.required)
    });
  }
  
  public login(): void {
    this.loginSubscription = this._authservice.login(this.loginFrom.value.username, this.loginFrom.value.password)
      .subscribe((response: any) => {
        delete localStorage.token;
        localStorage.token = response.token;
        delete localStorage.name;
        localStorage.name = this.loginFrom.value.username;
        this._router.navigate([''])
      });
  }

  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe()
    }
  }
}