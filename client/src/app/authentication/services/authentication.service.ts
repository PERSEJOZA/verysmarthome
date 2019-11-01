import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ConfigurationService} from 'src/app/shared/services/configuration.service';

import {User} from '../models/user';

@Injectable()
export class AuthenticationService {
  private baseURL = this.configuration.nestJSServerUrl;

  constructor(private http: HttpClient, private configuration: ConfigurationService) {}

  login(username: string, password: string): Observable<string> {
    return this.http.post<string>(`${this.baseURL}/login`, new User(username, password));
  }

  register(username: string, password: string): Observable<string> {
    return this.http.post<string>(`${this.baseURL}/register`, new User(username, password));
  }
}
