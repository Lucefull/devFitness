import { Treino } from 'src/model/estruturas';
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
  set,
  update,
} from 'firebase/database';

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
    console.log(response);
    return response;
  }

  async updateUsuario(data: UserStats): Promise<void> {
    const uid = this.authService.getUser()?.uid as string;
    const path = uid + '/usuario';
    return await update(this.dbRef, { [path]: data });
  }

  async getHistorico(): Promise<Historico[] | null> {
    let hist = null;
    const uid = this.authService.getUser()?.uid as string;
    const path = uid + '/historico';
    await get(child(this.dbRef, path))
      .then((e) => (hist = e.val() as Historico[]))
      .catch((error) => console.error(error));
    return hist;
  }
  async postHistorico(data: Historico): Promise<void> {
    const uid = this.authService.getUser()?.uid as string;

    let historico: Historico[] = [];
    await this.getHistorico().then((e) => {
      if (e) {
        historico = e;
      }
    });

    const path = `${uid}/historico/${historico.length}`;
    await update(this.dbRef, { [path]: data })
      .then((e) => console.log('Historico salvo'))
      .catch((error) => console.error);
  }

  async postTreino(data: Treino): Promise<void> {
    const uid = this.authService.getUser()?.uid as string;
    //const path = uid + '/treinos';

    let treinos: Treino[] = [];
    await this.getTreinos().then((e) => {
      if (e) {
        treinos = e;
      }
    });
    data.id = treinos.length;
    const path = `${uid}/treinos/${treinos.length}`;

    console.log(
      '🚀 ~ file: database.service.ts:71 ~ DatabaseService ~ postTreino ~ path:',
      path
    );
    return await update(this.dbRef, { [path]: data })
      .then((e) => console.log('salvo'))
      .catch((e) => console.error(e));
  }

  async getTreinos(): Promise<Treino[] | null> {
    let hist = null;
    const uid = this.authService.getUser()?.uid as string;
    const path = uid + '/treinos';
    await get(child(this.dbRef, path))
      .then((e) => (hist = e.val() as Treino[]))
      .catch((error) => console.error(error));
    return hist;
  }

  async getTreinoById(id: number): Promise<Treino | null> {
    let hist = null;
    const uid = this.authService.getUser()?.uid as string;
    const path = `${uid}/treinos/${id}`;
    await get(child(this.dbRef, path))
      .then((e) => (hist = e.val() as Treino))
      .catch((error) => console.error(error));
    return hist;
  }
  async updateTreino(data: Treino): Promise<void> {
    const uid = this.authService.getUser()?.uid as string;
    const path = uid + '/treinos';
    return await update(this.dbRef, { [path]: data });
  }
}
