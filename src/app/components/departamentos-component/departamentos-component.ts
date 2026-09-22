import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../../environments/services/service.departamentos';

@Component({
  selector: 'app-departamentos-component',
  standalone: false,
  styleUrl: './departamentos-component.css',
  templateUrl: './departamentos-component.html',
})
export class DepartamentosComponent implements OnInit {
  public departamentos!: Array<Departamento>;
  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceDepartamentos){}
  async ngOnInit(): Promise<void> {
    this.loadDepartamentosAsync();
  }

  //CREAMOS UN METODO DE RECARGA DE LOS DATOS
  async loadDepartamentosAsync(): Promise<void>{
    this.departamentos = await this._service.getDepartamentosAsync();
    this._cdr.detectChanges();  
  }
  deleteDepartamento(id: number): void{
    this._service.deleteDepartamento(id).subscribe(response => {
      console.log("Deleted: " + id);
      this.loadDepartamentosAsync();
    })
  }
}
