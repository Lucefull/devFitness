import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  User,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  user: User | null = null;
  token: string | undefined;

  isAutheticated(): boolean {
    const auth = sessionStorage.getItem('user');
    if (auth) {
      const user: User = JSON.parse(auth);

      return true;
    }
    return false;
  }

  getUser() {
    const auth = sessionStorage.getItem('user');
    if (auth) {
      const user: User = JSON.parse(auth);

      return user;
    }
    return null;
  }

  async login() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        this.token = credential?.accessToken;
        this.user = result.user;

        sessionStorage.setItem('user', JSON.stringify(result.user));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  logOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem('user');
        this.router.navigate(['login-page']);
      })
      .catch((error) => {
        // An error happened.
      });
  }
}
