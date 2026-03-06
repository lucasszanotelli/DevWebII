import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listav1 } from './listav1';

describe('Listav1', () => {
  let component: Listav1;
  let fixture: ComponentFixture<Listav1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listav1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listav1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
