import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
AuthService

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _AuthService:AuthService) { }

  logOut()
  {
    this._AuthService.signOut()
  }

  isLogin:boolean=false;

  ngOnInit(): void {
     this._AuthService.userInfo.subscribe({
      next:()=>{
        if(this._AuthService.userInfo.getValue() != null)
        {
          this.isLogin=true
        }
        else{
          this.isLogin=false;
        }
      }
     })
  }

}
