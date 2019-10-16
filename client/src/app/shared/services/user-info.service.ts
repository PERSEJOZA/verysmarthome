import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  username: string;

  constructor() {}

  clear(): void {
    this.username = undefined;
  }

  setUserInfo(): void {
    this.username = localStorage.username;
  }
}
