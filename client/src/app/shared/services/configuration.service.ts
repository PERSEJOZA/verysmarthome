import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  public nestJSServerUrl = 'http://localhost:3000/api';
}
