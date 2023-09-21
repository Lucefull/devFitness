import { AuthService } from './../authService.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  async ngOnInit() {}

  async login() {
    await this.authService.login();
    if (this.authService.isAutheticated()) this.router.navigate(['']);
  }
}
