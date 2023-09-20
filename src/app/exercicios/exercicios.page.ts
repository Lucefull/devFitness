import { Component, Input, OnInit } from '@angular/core';
import { Exercicio, Treino } from 'src/model/estruturas';
import { TreinoService } from '../services/treino.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.page.html',
  styleUrls: ['./exercicios.page.scss'],
})
export class ExerciciosPage implements OnInit {
  @Input() treino: Treino;
  exercicios: Exercicio[] = [];
  constructor(private treinoService: TreinoService, private router: Router, private actRoute: ActivatedRoute) {
    const id = this.actRoute.snapshot.paramMap.get('id') || 0;
    const idNum: number = +id;
    this.treino = this.treinoService.getTreinoById(idNum);
  }

  ngOnInit() {
  }

  terminarTreino() {
    
  }

}
