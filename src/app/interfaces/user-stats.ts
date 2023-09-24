import { Historico } from './historico';
import { Treino } from './treino';

export interface UserStats {
  altura?: number;
  gordura?: number;
  idade?: number;
  imc?: number;
  musculo?: number;
  peso?: number;
  residuos?: number;
  ultimaAvalicao?: string;
  // treino?: Treino[];
  // historico?: Historico[];
}
