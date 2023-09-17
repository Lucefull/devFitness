import { TestBed } from '@angular/core/testing';

import { CadastrarTreinoServiceService } from './cadastrar-treino-service.service';

describe('CadastrarTreinoServiceService', () => {
  let service: CadastrarTreinoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarTreinoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
