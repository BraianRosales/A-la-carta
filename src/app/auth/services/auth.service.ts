import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserData, Token } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl: string = environment.urlPost;

  constructor(private httpClient: HttpClient) {}

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
}
