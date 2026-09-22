import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartamentosComponent } from './departamentos-component';

describe('DepartamentosComponent', () => {
  let component: DepartamentosComponent;
  let fixture: ComponentFixture<DepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartamentosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DepartamentosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
