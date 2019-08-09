import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isShowUserDetails = false;
  public username: string;

  constructor(private router: Router) {
  }

  public logout(): void {
    this.username = undefined;
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.username = localStorage.username;
  }
}
