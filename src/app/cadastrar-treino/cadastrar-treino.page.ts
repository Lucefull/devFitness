import { Component, OnInit } from '@angular/core';
import { Exercicio } from 'src/model/estruturas';

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

  constructor() { }

  ngOnInit() {    
  }
  doSomething() {
    console.log('biriguiri')
    let exercicio: Exercicio
    let series: number = +this.numeroSeries;
    let repeticoes: number = +this.numeroRepeticoes;

    exercicio = new Exercicio(0, this.nomeExercicio, series, repeticoes);
    this.exercicios.push(exercicio)

    this.nomeExercicio =""
    this.numeroRepeticoes = ""
    this.numeroSeries = ""
  }

}
