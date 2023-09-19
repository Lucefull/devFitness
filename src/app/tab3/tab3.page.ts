import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../authService.service';
import { User, getAuth } from 'firebase/auth';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  user?: User | null;
  username: string;
  constructor() {
    this.username = 'Luan Steffens';
  }

  ngOnInit() {
    console.log(this.user);
    // const auth = await getAuth();
    // console.log(
    //   '🚀 ~ file: tab3.page.ts:19 ~ Tab3Page ~ ngOnInit ~ auth:',
    //   auth
    // );
    // const user = await auth.currentUser;
    // console.log(
    //   '🚀 ~ file: tab3.page.ts:19 ~ Tab3Page ~ ngOnInit ~ user:',
    //   user
    // );
    // this.user = user;
  }

  // async getUser(): Promise<User | null> {
  //   const auth = await getAuth();
  //   console.log(
  //     '🚀 ~ file: tab3.page.ts:19 ~ Tab3Page ~ getUser ~ auth:',
  //     auth
  //   );
  //   // const user = (await auth.currentUser) as User;
  //   // console.log(
  //   //   '🚀 ~ file: tab3.page.ts:24 ~ Tab3Page ~ getUser ~ user:',
  //   //   user
  //   // );

  //   return null;
  // }
}
