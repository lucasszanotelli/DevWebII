import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormV } from './form-v';

describe('FormV', () => {
  let component: FormV;
  let fixture: ComponentFixture<FormV>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormV]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormV);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
