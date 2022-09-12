import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserData, ObjToken } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl: string = environment.urlPost;

  constructor(private httpClient: HttpClient) {}

  login(userData: UserData) {
    return this.httpClient.post<ObjToken>(`${this.loginUrl}`, userData).pipe(
          map((res: ObjToken) => res.token)
    );
  }
}
