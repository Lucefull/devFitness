import { Component, OnInit } from '@angular/core';
import { Exercicio, Treino } from 'src/model/estruturas';
import { TreinoService } from '../services/treino.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-treino',
  templateUrl: './cadastrar-treino.page.html',
  styleUrls: ['./cadastrar-treino.page.scss'],
})
export class CadastrarTreinoPage implements OnInit {
  numeroSeries: string = "";
  nomeTreino: string ="";
  nomeExercicio: string ="";
  numeroRepeticoes: string = "";
  exercicios: Exercicio[] = [];

  constructor(private treinoService: TreinoService, private router: Router) { }

  ngOnInit() {
  }
  adicionarExercicio() {
    let exercicio: Exercicio
    let series: number = +this.numeroSeries;
    let repeticoes: number = +this.numeroRepeticoes;

    exercicio = new Exercicio(0, this.nomeExercicio, series, repeticoes);
    this.exercicios.push(exercicio)

    this.nomeExercicio =""
    this.numeroRepeticoes = ""
    this.numeroSeries = ""
  }

  salvar(){
    this.treinoService.addTreino(this.nomeTreino, this.nomeTreino, 30, this.exercicios)
    this.nomeTreino = "";
    this.exercicios = [];
    this.router.navigate(['']);
  }

}
