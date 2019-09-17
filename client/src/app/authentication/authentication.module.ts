import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import {LoginComponent} from './components/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [AuthenticationRoutingModule, SharedModule],
  exports: [LoginComponent],
})
export class AuthenticationModule {}
