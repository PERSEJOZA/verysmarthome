import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../models/user';

@Injectable()
export class AuthenticationService {
  private baseURL = 'http://localhost:3001/api';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<string> {
    return this.http.post<string>(
      `${this.baseURL}/login`,
      new User(username, password)
    );
  }

  register(username: string, password: string): Observable<string> {
    return this.http.post<string>(
      `${this.baseURL}/register`,
      new User(username, password)
    );
  }
}
