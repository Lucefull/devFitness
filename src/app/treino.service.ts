import { Injectable } from '@angular/core';
import { Exercicio, Treino} from '../model/estruturas'

@Injectable({
  providedIn: 'root'
})
export class TreinoService {

  treinos : Treino[] = []

  constructor() { 
    this.mock()
  }
  mock() {
    this.treinos[0] = new Treino(this.treinos.length + 1, "Teste", "Teste", 30)
    this.treinos[1] = new Treino(this.treinos.length + 1, "Testinha", "Testinha", 88)
    this.treinos[2] = new Treino(this.treinos.length + 1, "Testudo", "Testudo", 90)
  }
  getTreinoById(id : number) {
    for(let index = 0; index < this.treinos.length; index++){
      if(id == this.treinos[index].id) {
        return this.treinos[index]
      }
    }
    return
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
  addTreino(tipo : string, name : string, time : number) {
    this.treinos.push(new Treino(this.treinos.length + 1, tipo, name, time))
  }
  updateTreino(id : number, tipo : string, name : string, tempo : number) {
    this.treinos[id - 1].tipo = tipo
    this.treinos[id - 1].name = name
    this.treinos[id - 1].tempo = tempo
  }
}
