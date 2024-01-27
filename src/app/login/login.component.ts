import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




  constructor(private _AuthService: AuthService, private _Router: Router) { }



  loginForm: FormGroup = new FormGroup({

    userName: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])

  })

  error: string = ''


  submitLoginForm() {
    //console.log(loginForm.value);

    this._AuthService.login(this.loginForm.value).subscribe({
      next: (response => {

        if (response) {
          localStorage.setItem('userToken', response.token);
          this._AuthService.saveUserInfo();
          this._Router.navigate(['/home']);
        }
        else {
          this.error = response
          console.log(response);

        }

      })
    })
  }






  ngOnInit(): void {
    this._AuthService.userInfo.subscribe({
      next: () => {
        if (this._AuthService.userInfo.getValue() != null) {
          this._Router.navigateByUrl('/home')
        }

      }
    })
  }

}
