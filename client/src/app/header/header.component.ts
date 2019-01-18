import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isShowLogin = false;

  constructor(private _authservice: AuthService) { }

  ngOnInit() {
  }
  
  public login(username: string, password: string) {
    this._authservice.login(username, password).subscribe((token: string) => console.log(token));
  }
}
