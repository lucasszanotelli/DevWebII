import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioComService } from './usuario-com-service';

describe('UsuarioComService', () => {
  let component: UsuarioComService;
  let fixture: ComponentFixture<UsuarioComService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioComService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioComService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
