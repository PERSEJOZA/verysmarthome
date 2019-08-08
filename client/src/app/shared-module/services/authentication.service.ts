import { Injectable } from "@angular/core";
import { SharedModule } from "../shared.module";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthenticationService {
  private baseURL = "http://localhost:3001/api";

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    return this.http.post<string>(
      `${this.baseURL}/login`,
      new User(username, password)
    );
  }
}
