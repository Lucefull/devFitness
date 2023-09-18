import { Component } from '@angular/core';
import { AuthService } from '../authService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(private authService: AuthService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    if (await this.authService.isAutheticated())
      this.router.navigate(['login-page']);

    console.log(this.authService.user);
  }
}
