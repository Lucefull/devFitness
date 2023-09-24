import { Component, Input, OnInit } from '@angular/core';
import { Treino } from '../interfaces/treino';
import { Exercicio } from '../interfaces/Exercicio';
import { DatabaseService } from '../database.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStats } from '../interfaces/user-stats';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.page.html',
  styleUrls: ['./exercicios.page.scss'],
})
export class ExerciciosPage implements OnInit {
  @Input() treino: Treino;
  @Input() userStats: UserStats;
  exercicios: Exercicio[] = [];
  constructor(private databaseService: DatabaseService, private router: Router, private actRoute: ActivatedRoute) {
    const id = this.actRoute.snapshot.paramMap.get('id') || 0;
    const idNum: number = +id;

    this.treino = {};
    this.userStats = {};
    
    this.databaseService.getUserStats().then(userStats => {
      if (!!userStats && !!userStats.treino) {
        this.userStats = userStats;
        this.treino = userStats.treino[idNum - 1];
      }
    })
  }

  ngOnInit() {
  }

  terminarTreino() {
    if (!!this.userStats && !this.userStats.historico) {
      this.userStats.historico = [];
    }

    this.userStats.historico?.push({
      name: this.treino.name,
      descricao: this.treino.descricao,
      dataConclusao: new Date().toLocaleDateString('en-GB')
    });

    this.databaseService.updateUsuario(this.userStats);
    this.router.navigate(['tabs/tab2']);
    }

}
