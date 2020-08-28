import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin: boolean = true;
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apiKey = 'AIzaSyAzgmp51RhEJLqgPNIvdaxpb7E8fKj3BUo';
  //crear
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=[API_KEY]
  constructor(private http: HttpClient) {}
  logOut() {}
  login(user: UserModel) {}
  newUser(user: UserModel) {
    const authData = {
      ...user,
      returnSecureToken: true,
    };
    return this.http.post(`${this.url}/:signUp?key=${this.apiKey}`, authData);
  }
}
