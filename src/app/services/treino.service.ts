import { Injectable } from '@angular/core';
import { Exercicio, Treino} from '../../model/estruturas'

@Injectable({
  providedIn: 'root'
})
export class TreinoService {

  treinos : Treino[] = []

  constructor() {
    this.mock()
  }
  mock() {
    this.addTreino("Teste", "Teste", 30, [new Exercicio(1, "Supino", 3, 12), new Exercicio(2, "Crucifixo", 3, 12)])
  }
  getTreinoById(id : number): Treino {
    for(let index = 0; index < this.treinos.length; index++){
      if(id == this.treinos[index].id) {
        return this.treinos[index]
      }
    }
    return new Treino(-1, "", "", 0);
  }
  updateStatus(id : number) {
    if(this.treinos[id - 1].isDone){
      this.treinos[id - 1].isDone = false
    } else {
      this.treinos[id - 1].isDone = true
    }
  }
  deleteTreino(id : number) {
    this.treinos.splice(id - 1, 1)
  }
  addTreino(tipo : string, name : string, time : number, exercicios: Exercicio[]) {
    let treino = new Treino(this.treinos.length + 1, tipo, name, time);
    treino.exercicios = exercicios;
    this.treinos.push(treino)
  }
  updateTreino(id : number, tipo : string, name : string, tempo : number) {
    this.treinos[id - 1].tipo = tipo
    this.treinos[id - 1].name = name
    this.treinos[id - 1].tempo = tempo
  }
}
