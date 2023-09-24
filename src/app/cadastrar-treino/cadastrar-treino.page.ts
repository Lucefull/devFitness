import { Component, OnInit } from '@angular/core';
import { Exercicio } from '../interfaces/Exercicio';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-cadastrar-treino',
  templateUrl: './cadastrar-treino.page.html',
  styleUrls: ['./cadastrar-treino.page.scss'],
})
export class CadastrarTreinoPage implements OnInit {
  numeroSeries: string = "";
  descricao: string ="";
  nomeTreino: string ="";
  nomeExercicio: string ="";
  numeroRepeticoes: string = "";
  exercicios: Exercicio[] = [];

  constructor (private databaseService: DatabaseService, private router: Router) { }
  
  ngOnInit(): void {
    
  }

  adicionarExercicio() {
    let series: number = +this.numeroSeries;
    let repeticoes: number = +this.numeroRepeticoes;

    const exercicio : Exercicio = {
      isDone: false,
      name: this.nomeExercicio,
      repeticoes: repeticoes,
      serie: series
    }
    this.exercicios.push(exercicio)

    this.nomeExercicio =""
    this.numeroRepeticoes = ""
    this.numeroSeries = ""
  }

  salvar(){
    this.databaseService.getUserStats().then(userStats => {
      if (!!userStats && !userStats.treino) {
        userStats.treino = [];
      }
      userStats?.treino?.push({
        id: userStats.treino.length + 1,
        descricao: this.descricao,
        name: this.nomeTreino,
        exercicios: this.exercicios
      })
      if (!!userStats) {
        this.databaseService.updateUsuario(userStats)
        .catch(e => console.log(e));
      }

      this.nomeTreino = "";
      this.descricao = "";
      this.exercicios = [];
      this.router.navigate(['']);
    }).catch(e => console.log(e));
  }

}
