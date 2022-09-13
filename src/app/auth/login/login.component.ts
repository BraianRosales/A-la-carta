import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserData } from '../interfaces/interfaces';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error: unknown = '';
  /**Flag that maintains the button loading. */
  btnLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    if (this.authService.tokenVerification()) {
      this.router.navigate(['/home']);
    }
  }

  /**Method that saves the token in localStorage if apiResponse contains the token or else execute an alert with the error. */
  onSubmit() {
    const userData: UserData = {
      email: this.loginForm.get('email')!.value,
      password: this.loginForm.get('password')!.value,
    };
    this.btnLoading = true;
    setTimeout(() => {
      this.authService.login(userData).subscribe((apiResponse) => {
        if (apiResponse.token) {
          localStorage.setItem('Token', apiResponse.token);
          this.router.navigateByUrl('/home');
          return;
        }
        this.error = apiResponse.error.error;
        Swal.fire(`${this.error}`);
      });
      this.btnLoading = false;
    }, 1500);
  }
}
