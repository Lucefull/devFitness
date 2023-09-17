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

  isAutheticated: boolean | undefined;
  user: User | undefined;
  token: string | undefined;

  async login() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        this.isAutheticated = true;
        this.token = credential?.accessToken;
        this.user = result.user;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
