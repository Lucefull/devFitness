import { Component } from '@angular/core';
import { Treino } from 'src/model/estruturas';
import { TreinoService } from '../services/treino.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  treinos: Treino[] = [];
  constructor(private serv: TreinoService) {
    this.treinos = this.serv.treinos;
  }
}
