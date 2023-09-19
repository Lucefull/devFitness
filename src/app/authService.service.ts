import { Injectable } from '@angular/core';
import {
  GoogleAuthProvider,
  User,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';
import { CurrentUser } from './interfaces/CurrentUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  user: User | null = null;
  token: string | undefined;

  async isAutheticated(): Promise<boolean> {
    const auth = getAuth();
    this.user = auth.currentUser;

    return auth.currentUser !== null;
  }

  async getUser() {
    const auth = await getAuth();
    const user = auth.currentUser;

    return user;
  }

  async login() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
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
