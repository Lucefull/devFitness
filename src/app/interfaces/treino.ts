import { Exercicio } from "./Exercicio"

export interface Treino {
    id? : number
    descricao? : string
    name? : string
    data? : Date
    exercicios? : Exercicio[]
    isDone? : boolean
}