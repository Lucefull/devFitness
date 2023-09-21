import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../authService.service';
import { GoogleAuthProvider, User, getAuth } from 'firebase/auth';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  user?: User | null;

  username?: string;
  constructor(private authService: AuthService) {
    this.user = authService.getUser();
  }

  async ngOnInit() {}

  logOut() {
    this.authService.logOut();
  }
}
