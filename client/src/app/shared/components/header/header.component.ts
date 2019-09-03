import { UserInfoService } from 'src/app/services/user-info.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isShowUserDetails = false;

  constructor(
    private router: Router,
    public userInfoService: UserInfoService
  ) { }

  public logout(): void {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.userInfoService.setUserInfo();
  }
}
