import { Treino } from './../../model/estruturas';
import { Component, Input, OnInit } from '@angular/core';
import { Exercicio } from '../interfaces/exercicio';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStats } from '../interfaces/user-stats';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.page.html',
  styleUrls: ['./exercicios.page.scss'],
})
export class ExerciciosPage implements OnInit {
  // @Input() treino: Treino;
  // @Input() userStats: UserStats;
  exercicios: Exercicio[] = [];
  treino?: Treino | null;
  id?: number;
  constructor(
    private databaseService: DatabaseService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    const id = this.actRoute.snapshot.paramMap.get('id');
    if (id) {
      this.id = Number(id);
      await this.databaseService
        .getTreinoById(this.id)
        .then((e) => (this.treino = e as Treino))
        .catch((e) => console.error(e));
    }

    if (this.treino) {
      this.exercicios = this.treino.exercicios;
    }
  }

  terminarTreino() {
    this.databaseService.postHistorico({
      nomeTreino: this.treino?.name as string,
      categoria: this.treino?.descricao as string,
      dataConclusao: new Date().toLocaleDateString('en-GB'),
    });
    this.router.navigate(['tabs/tab2']);
  }
}
