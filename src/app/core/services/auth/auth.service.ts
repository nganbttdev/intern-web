import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly permissionSubject = new BehaviorSubject<any[] | null>(null);
  permission$ = this.permissionSubject.asObservable();

  constructor(
    private readonly http: HttpClient,
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {}

  removeToken() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('REMEMBER');
      localStorage.removeItem('REFRESH');
    }
  }

  verifyToken(): Observable<any> | null {
    return null;
  }
}
