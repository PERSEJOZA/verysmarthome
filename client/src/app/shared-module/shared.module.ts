import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./components/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AuthenticationService } from "./services/authentication.service";
import { AuthenticationGuard } from "./guards/authentication.guard";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [LoginComponent, HeaderComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [AuthenticationService, AuthenticationGuard],
  exports: [HeaderComponent, LoginComponent]
})
export class SharedModule {}
