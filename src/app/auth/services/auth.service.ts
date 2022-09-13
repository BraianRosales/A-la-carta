import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserData, Token } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**This variable return the url of type post */
  private loginUrl: string = environment.urlPost;

  constructor(private httpClient: HttpClient) {}

  /**If userData is valid return the token or else an error. */
  login(userData: UserData) {
    return this.httpClient.post<any>(`${this.loginUrl}`, userData).pipe(
      tap((res) => {
        if (res.token) {
          map((res: Token) => res.token);
        }
      }),
      catchError((err) => of(err))
    );
  }

  /**Return true if the token doesn't exist, if return true allows access */
  tokenVerification(): Observable<boolean> {
    if (localStorage.getItem('Token')) {
      return of(true) ;
    }
    return of(false);
  }
}
