import { Component, OnInit } from '@angular/core';
import { Treino } from '../interfaces/treino';
import { RouterEvent, Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  treinos?: Treino[] | null;

  constructor(
    private databaseService: DatabaseService,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.getData();
  }

  async ngOnInit() {
    this.getData();
  }

  async getData() {
    await this.databaseService
      .getTreinos()
      .then((e) => (this.treinos = e))
      .catch((e) => console.error(e));
  }

  navToExercicios(item: Treino) {
    this.router.navigate(['/exercicios/' + item.id]);
  }
}
