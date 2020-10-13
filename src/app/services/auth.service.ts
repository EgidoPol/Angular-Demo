import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public SignIn(userData: User){
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }
  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public logOut(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

}
