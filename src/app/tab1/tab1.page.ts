import { Component } from '@angular/core';
import { Exercicio, Treino} from '../../model/estruturas'
import { TreinoService } from '../services/treino.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  treinos : Treino [] = []

  constructor(private serv: TreinoService, private router: Router) {
    this.treinos = this.serv.treinos
  }

  navToExercicios(item: Treino){
    this.router.navigate(["/exercicios/"+item.id])
  }
}
