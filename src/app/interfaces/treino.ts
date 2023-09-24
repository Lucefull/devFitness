import { Exercicio } from './exercicio';

export interface Treino {
  id?: number | null;
  descricao?: string;
  name?: string;
  // data?: Date;
  exercicios?: Exercicio[];
  // isDone?: boolean;
}
