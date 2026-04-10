import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIII } from './form-iii';

describe('FormIII', () => {
  let component: FormIII;
  let fixture: ComponentFixture<FormIII>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormIII]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIII);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
