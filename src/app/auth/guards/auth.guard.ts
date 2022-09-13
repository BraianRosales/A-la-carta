import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router){}

  /**In canActivate if tokenVerification returns false redirect to login. */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>  |  boolean {
    return this.authService.tokenVerification().pipe(
      tap(verification => {
        if(!verification)
          this.router.navigate(['/login'])
      })
    );
  }

  /**In canLoad if tokenVerification returns false redirect to login. */
  canLoad(
    route: Route,
    segments: UrlSegment[]):  Observable<boolean>  |  boolean {
    return this.authService.tokenVerification().pipe(
      tap(verification => {
        if(!verification)
          this.router.navigate(['/login'])
      })
    );;
  }
}
