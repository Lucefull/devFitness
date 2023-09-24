import { UserStats } from './../interfaces/user-stats';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authService.service';
import { User } from 'firebase/auth';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  user?: User | null;
  userDetails?: UserStats;
  username?: string;
  editable: boolean = false;

  musculo?: number;
  altura?: number;
  gordura?: number;
  idade?: number;
  imc?: number;
  peso?: number;
  residuos?: number;
  ultimaAvalicao?: string;

  constructor(
    private authService: AuthService,
    private dataService: DatabaseService
  ) {
    this.user = authService.getUser();
    this.getDadosUsuario();
  }

  ngOnInit(): void {}

  async getDadosUsuario(): Promise<void> {
    await this.dataService.getUserStats().then((e) => {
      if (e !== null) {
        this.userDetails = e;
        this.musculo = e.musculo;
        this.altura = e.altura;
        this.gordura = e.gordura;
        this.idade = e.idade;
        this.imc = e.imc;
        this.peso = e.peso;
        this.residuos = e.residuos;
        this.ultimaAvalicao = e.ultimaAvalicao;
      }
    });
  }

  toggleEditable() {
    this.editable = true;
  }

  logOut() {
    this.authService.logOut();
  }

  limpar() {
    if (this.userDetails) {
      this.musculo = this.userDetails.musculo;
      this.altura = this.userDetails.altura;
      this.gordura = this.userDetails.gordura;
      this.idade = this.userDetails.idade;
      this.imc = this.userDetails.imc;
      this.peso = this.userDetails.peso;
      this.residuos = this.userDetails.residuos;
      this.ultimaAvalicao = this.userDetails.ultimaAvalicao;
    }
    this.editable = false;
  }

  salvar() {
    this.imc = this.calcularIMC(this.peso, this.altura);
    const data: UserStats = {
      musculo: this.musculo,
      altura: this.altura,
      gordura: this.gordura,
      idade: this.idade,
      imc: this.imc,
      peso: this.peso,
      residuos: this.residuos,
      ultimaAvalicao: new Date().toLocaleDateString('en-GB'),
    };

    this.userDetails = data;
    this.dataService
      .updateUsuario(data)
      .then((e) => {
        alert('Avaliação salva');
        this.editable = false;
      })
      .catch((e) => console.error(e));
  }

  calcularIMC(kilos: number = 0, altura: number = 0): number {
    altura = altura;
    return Math.round(kilos / (altura * altura));
  }
}
