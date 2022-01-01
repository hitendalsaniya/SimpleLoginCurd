import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }

  password: any = 'password'
  loginForm: any = FormGroup;
  passwordPtn = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'

  email:any= 'hitenpatel@gmail.com';
  pass:any='12345@Abcd'

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.pattern(this.emailPattern), Validators.email]),
      'password': new FormControl(null, [Validators.pattern(this.passwordPtn), Validators.minLength(8)])
    });

  }
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
    } else {
      this.password = 'password';
    }
  }

  loginSubmint() {
    let users = this.loginForm.value
    if(users.email === this.email && users.password === this.pass){
      this._router.navigate(['./home'])
      this.loginForm.reset()
    }else{
      this._router.navigate(['./'])
      this.loginForm.reset()
      alert('Pease Enter valid ID & Password')
    }
  }

}
