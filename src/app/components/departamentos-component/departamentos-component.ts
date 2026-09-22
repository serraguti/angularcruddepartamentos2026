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
    this.departamentos = await this._service.getDepartamentosAsync();
    this._cdr.detectChanges();
  }
}
