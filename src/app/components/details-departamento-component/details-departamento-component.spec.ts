import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsDepartamentoComponent } from './details-departamento-component';

describe('DetailsDepartamentoComponent', () => {
  let component: DetailsDepartamentoComponent;
  let fixture: ComponentFixture<DetailsDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsDepartamentoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsDepartamentoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
