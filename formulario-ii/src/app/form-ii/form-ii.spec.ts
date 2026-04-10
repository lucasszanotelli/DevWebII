import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormII } from './form-ii';

describe('FormII', () => {
  let component: FormII;
  let fixture: ComponentFixture<FormII>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormII]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormII);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
