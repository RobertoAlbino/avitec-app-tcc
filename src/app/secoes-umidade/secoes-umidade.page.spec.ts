import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecoesUmidadePage } from './secoes-umidade.page';

describe('SecoesUmidadePage', () => {
  let component: SecoesUmidadePage;
  let fixture: ComponentFixture<SecoesUmidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecoesUmidadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecoesUmidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
