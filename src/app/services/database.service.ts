import { Historico } from '../interfaces/historico';
import { UserStats } from '../interfaces/user-stats';
import { AuthService } from './authService.service';
import { Injectable } from '@angular/core';
import {
  DatabaseReference,
  child,
  get,
  getDatabase,
  ref,
  update,
} from 'firebase/database';
import { Treino } from './interfaces/treino';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private me = '/DRK8xc7qK8VhCyH1CLzd0BjAKzt1';

  dbRef: DatabaseReference;
  constructor(private authService: AuthService) {
    this.dbRef = ref(getDatabase());
  }

  async getUserStats(): Promise<UserStats | null> {
    let response: UserStats | null = null;
    const user = this.authService.getUser()?.uid;
    await get(child(this.dbRef, `${user}/usuario` as string)).then(
      (e) => (response = e.val() as UserStats)
    );
    return response;
  }

  async updateUsuario(data: UserStats): Promise<void> {
    const uid = this.authService.getUser()?.uid as string;
    const path = uid + '/usuario';
    return await update(this.dbRef, { [path]: data });
  }

  async getHistorico(): Promise<{} | Historico[]> {
    let hist = {};
    const uid = this.authService.getUser()?.uid as string;
    const path = uid + '/historico';
    await get(child(this.dbRef, path))
      .then((e) => (hist = e.val() as Historico[]))
      .catch((error) => console.error(error));
    return hist;
  }
}
