import { Component } from '@angular/core';
import { AuthService } from '../services/authService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (!this.authService.isAutheticated()) {
      this.router.navigate(['login-page']);
    }
  }
}
