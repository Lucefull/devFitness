import { Component, OnInit } from '@angular/core';
import { Exercicio } from '../interfaces/exercicio';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { Treino } from 'src/model/estruturas';

@Component({
  selector: 'app-cadastrar-treino',
  templateUrl: './cadastrar-treino.page.html',
  styleUrls: ['./cadastrar-treino.page.scss'],
})
export class CadastrarTreinoPage implements OnInit {
  numeroSeries: string = '';
  descricao: string = '';
  nomeTreino: string = '';
  nomeExercicio: string = '';
  numeroRepeticoes: string = '';
  exercicios: Exercicio[] = [];

  constructor(
    private databaseService: DatabaseService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  adicionarExercicio() {
    let series: number = +this.numeroSeries;
    let repeticoes: number = +this.numeroRepeticoes;

    const exercicio: Exercicio = {
      isDone: false,
      name: this.nomeExercicio,
      repeticoes: repeticoes,
      serie: series,
    };
    this.exercicios.push(exercicio);

    this.nomeExercicio = '';
    this.numeroRepeticoes = '';
    this.numeroSeries = '';
  }

  salvar() {
    this.databaseService
      .postTreino({
        descricao: this.descricao,
        name: this.nomeTreino as string,
        exercicios: this.exercicios as Exercicio[],
      } as Treino)
      .then((e) => {
        console.log(e);
      })
      .catch((error) => console.error(error));
    this.nomeTreino = '';
    this.descricao = '';
    this.exercicios = [];
    this.router.navigate(['']);
  }
}
