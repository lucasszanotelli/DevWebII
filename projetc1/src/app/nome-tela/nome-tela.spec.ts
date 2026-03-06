import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeTela } from './nome-tela';

describe('NomeTela', () => {
  let component: NomeTela;
  let fixture: ComponentFixture<NomeTela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomeTela]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomeTela);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
