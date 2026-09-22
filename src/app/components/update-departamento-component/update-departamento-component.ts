import { Component, ChangeDetectorRef, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../../environments/services/service.departamentos';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update-departamento-component',
  standalone: false,
  styleUrl: './update-departamento-component.css',
  templateUrl: './update-departamento-component.html',
})
export class UpdateDepartamentoComponent implements OnInit{
  public departamento!: Departamento;
  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!: ElementRef;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceDepartamentos,
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ){}

  async ngOnInit(): Promise<void> {
    this._activeRoute.params.subscribe(async (params: Params) => {
      let id = parseInt(params["id"]);
      this.departamento = await this._service.findDepartamentoAsync(id);
      this._cdr.detectChanges();
    })
  }

  updateDepartamento(): void {
    let id = parseInt(this.cajaId.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLocalidad.nativeElement.value;
    let dept = new Departamento(id, nombre, localidad);
    console.log(dept);
    this._service.updateDepartamento(dept).subscribe(response => {
      console.log("Updated!!!");
      //EN LUGAR DE ENVIARLO A HOME, LO ENVIAMOS A DETAILS.
      this._router.navigate(["/details", dept.numero, dept.nombre, dept.localidad]);
    });
  }
}
