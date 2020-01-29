import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ConfigurationService} from 'src/app/services/configuration.service';

import {User} from '../models/user';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient, private configuration: ConfigurationService) {}

  public login(username: string, password: string): Observable<string> {
    return this.http.post<string>(`${this.configuration.nestJSServerUrl}/login`, new User(username, password));
  }

  public register(username: string, password: string): Observable<string> {
    return this.http.post<string>(`${this.configuration.nestJSServerUrl}/register`, new User(username, password));
  }
}
