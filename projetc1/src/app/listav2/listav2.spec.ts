import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listav2 } from './listav2';

describe('Listav2', () => {
  let component: Listav2;
  let fixture: ComponentFixture<Listav2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listav2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listav2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
