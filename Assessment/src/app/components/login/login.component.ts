import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  errorMsg: "";
  form: FormGroup;
  loginInvalid: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.loginInvalid = false;
    if (this.form.valid) {
      try {
        const email = this.form.get('email').value;
        const password = this.form.get('password').value;
        let data = { email: email, password: password };
        this.authService.login(data)
          .subscribe(
            response => {
              localStorage.setItem('token', response.token);
              this.router.navigate(['/users']);
            },
            error => {
              this.errorMsg = error.error.error;
            });
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
    }
  }
}
