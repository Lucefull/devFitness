import { DatabaseService } from '../services/database.service';
import { Historico } from './../interfaces/historico';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  ionViewWillEnter() {
    this.getData();
  }
  historico: Historico[] = [];
  constructor(private serv: DatabaseService) {
    this.getData();
  }

  async getData(): Promise<void> {
    await this.serv.getHistorico().then((e) => {
      this.historico = e as Historico[];
      console.log('🚀 ~ file: tab2.page.ts:18 ~ Tab2Page ~ getData ~ e:', e);
      return;
    });
  }
}
