import { Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  get appVersion(): string {
    return this.isBrowser ? (window as any).ENV?.APP_VERSION || 'N/A' : 'N/A';
  }

  get buildTime(): string {
    return this.isBrowser ? (window as any).ENV?.BUILD_TIME || 'N/A' : 'N/A';
  }

  get authService(): string {
    return this.isBrowser ? (window as any).ENV?.AUTH_SERVICE || '' : '';
  }

  getAllEnv() {
    return {
      production: true,
      authService: this.authService,
      appVersion: this.appVersion,
      buildTime: this.buildTime,
    };
  }
}