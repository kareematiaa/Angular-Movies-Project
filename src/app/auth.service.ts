import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken') != null) {
      this.saveUserInfo()
    }
  }

  userInfo: any = new BehaviorSubject(null);

  saveUserInfo() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'))
    let decodedToken: object = jwtDecode(encodedToken)
    this.userInfo.next(decodedToken);
    console.log(this.userInfo);

  }

  singUp(userData: object): Observable<any> {
    return this._HttpClient.post('http://mahmoudelafandy-001-site1.btempurl.com/api/Account/register', userData)
    //return this._HttpClient.post('http://localhost:58089/api/Account/register', userData)
  }

  login(userData: object): Observable<any> {
    return this._HttpClient.post('http://mahmoudelafandy-001-site1.btempurl.com/api/Account/login', userData)
  }

  signOut() {
    localStorage.removeItem('userToken')
    this.userInfo.next(null)
    this._Router.navigateByUrl('/login')
  }
}
