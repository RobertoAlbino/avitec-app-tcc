import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPadraoPage } from './tabela-padrao.page';

describe('TabelaPadraoPage', () => {
  let component: TabelaPadraoPage;
  let fixture: ComponentFixture<TabelaPadraoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaPadraoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaPadraoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
