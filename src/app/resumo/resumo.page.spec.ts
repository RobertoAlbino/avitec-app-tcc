import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoPage } from './resumo.page';

describe('ResumoPage', () => {
  let component: ResumoPage;
  let fixture: ComponentFixture<ResumoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
