import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-details-departamento-component',
  standalone: false,
  styleUrl: './details-departamento-component.css',
  templateUrl: './details-departamento-component.html',
})
export class DetailsDepartamentoComponent implements OnInit {
  public departamento!: Departamento;
  constructor(
    private _cdr: ChangeDetectorRef,
    private _activeRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let id = parseInt(params["id"]);
      let nombre = params["nombre"];
      let localidad = params["localidad"];
      this.departamento = new Departamento(id, nombre, localidad);
      this._cdr.detectChanges();
    })
  }
}
