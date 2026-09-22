import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsertDepartamentoComponent } from './insert-departamento-component';

describe('InsertDepartamentoComponent', () => {
  let component: InsertDepartamentoComponent;
  let fixture: ComponentFixture<InsertDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertDepartamentoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsertDepartamentoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
