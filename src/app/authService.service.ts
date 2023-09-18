import { Injectable } from '@angular/core';
import {
  GoogleAuthProvider,
  User,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  //isAutheticated: boolean | undefined;
  user: User | null = null;
  token: string | undefined;

  async isAutheticated(): Promise<boolean> {
    const auth = getAuth();
    console.log(
      '🚀 ~ file: authService.service.ts:21 ~ AuthService ~ isAutheticated ~ auth:',
      auth
    );
    this.user = auth.currentUser;
    console.log(
      '🚀 ~ file: authService.service.ts:23 ~ AuthService ~ isAutheticated ~ user:',
      this.user
    );

    return this.user !== null;
  }

  async login() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    console.log(
      '🚀 ~ file: authService.service.ts:26 ~ AuthService ~ login ~ auth:',
      auth
    );
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        this.token = credential?.accessToken;
        this.user = result.user;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
