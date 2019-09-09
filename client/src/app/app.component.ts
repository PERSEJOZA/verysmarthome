import { Component } from "@angular/core";

import { ErrorMessageService } from "./services/error-message.service";
import { SpinnerService } from "./services/spinner.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(
    public spinnerService: SpinnerService,
    public errorMessageService: ErrorMessageService
  ) {}
}
