import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  email: string = '';
  password: string = '';
  myname = 'nangkyawt';
  passwordVisible: boolean = false;

  login() {
    console.log('Login method called');
    const storedEmail = localStorage.getItem('defaultEmail');
    const storedPassword = localStorage.getItem('defaultPassword');

    if (this.email === storedEmail && this.password === storedPassword) {
      // Simulate successful login
      localStorage.setItem('token', 'fake-jwt-token'); // Store a fake token
      this.router.navigateByUrl('/home'); // Navigate to home page on success
      alert('Login Successful');
    } else {
      alert('Invalid credentials');
    }
  }
}
