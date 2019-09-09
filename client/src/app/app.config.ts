import { InjectionToken } from "@angular/core";

export const HERO_DI_CONFIG: NewType = {
  apiEndpoint: "api.heroes.com",
  title: "Dependency Injection"
};

export const APP_CONFIG = new InjectionToken<AppConfig>("app.config");
