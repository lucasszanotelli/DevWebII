import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIv } from './form-iv';

describe('FormIv', () => {
  let component: FormIv;
  let fixture: ComponentFixture<FormIv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormIv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
