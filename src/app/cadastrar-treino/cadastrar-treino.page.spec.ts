import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarTreinoPage } from './cadastrar-treino.page';

describe('CadastrarTreinoPage', () => {
  let component: CadastrarTreinoPage;
  let fixture: ComponentFixture<CadastrarTreinoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrarTreinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
