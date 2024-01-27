import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-regiester',
  templateUrl: './regiester.component.html',
  styleUrls: ['./regiester.component.css']
})
export class RegiesterComponent implements OnInit {

  constructor(private _AuthService: AuthService, private _Router: Router) { }



  hide = true
  // registerForm: FormGroup = new FormGroup({
  //   first_name: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
  //   last_name: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
  //   //age: new FormControl(null, [Validators.min(16), Validators.max(80), Validators.required]),
  //   phone: new FormControl(null, [Validators.required]),
  //   email: new FormControl(null, [Validators.email, Validators.required]),
  //   userName: new FormControl(null, [Validators.required]),

  //   password: new FormControl(null, [Validators.required]),

  //   ConfirmPassword: new FormControl(null, [Validators.required])
  // })


  registerForm: FormGroup = new FormGroup({
    userName: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    firstName: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
    lastName: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
    phone: new FormControl(null, [Validators.required]),
  })

  error: string = ''

  submitRegisterForm() {
    //console.log(registerForm.value)


    this._AuthService.singUp(this.registerForm.value).subscribe({
      next: (response => {

        if (response.succeeded == true) {
          //this.toastr.success('loged in helw','login page')
          this._Router.navigate(['/login'])
        }
        else {
          this.error = response.description
        }
      })
    })
  }






  ngOnInit(): void {

  }

}
