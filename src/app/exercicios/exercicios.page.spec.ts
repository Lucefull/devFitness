import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciciosPage } from './exercicios.page';

describe('ExerciciosPage', () => {
  let component: ExerciciosPage;
  let fixture: ComponentFixture<ExerciciosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExerciciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
