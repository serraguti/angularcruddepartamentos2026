import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../../environments/services/service.departamentos';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-insert-departamento-component',
  standalone: false,
  styleUrl: './insert-departamento-component.css',
  templateUrl: './insert-departamento-component.html',
})
export class InsertDepartamentoComponent {
  public mensaje!: string;
  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!: ElementRef;

  constructor(private _cdr: ChangeDetectorRef
    , private _service: ServiceDepartamentos
  ){}
  
  createDepartamento(): void {
    //RECUPERAMOS LOS DATOS DE LAS CAJAS
    let id = this.cajaId.nativeElement.value;
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLocalidad.nativeElement.value;
    //INSTANCIAMOS UN NUEVO DEPARTAMENTO CON LOS VALORES
    let dept = new Departamento(id, nombre, localidad);
    //REALIZAMOS LA PETICION POST
    this._service.createDepartamento(dept).subscribe(response => {
      console.log("Insertado");
      this.mensaje = "Departamento insertado";
      this._cdr.detectChanges();
    });
  }
}
