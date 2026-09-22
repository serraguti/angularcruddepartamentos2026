import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosComponent } from './components/departamentos-component/departamentos-component';
import { InsertDepartamentoComponent } from './components/insert-departamento-component/insert-departamento-component';
import { DetailsDepartamentoComponent } from './components/details-departamento-component/details-departamento-component';
import { UpdateDepartamentoComponent } from './components/update-departamento-component/update-departamento-component';
const routes: Routes = [
  {path: "", component: DepartamentosComponent },
  { path: "create", component: InsertDepartamentoComponent},
  { path: "details/:id/:nombre/:localidad", component: DetailsDepartamentoComponent},
  { path: "update/:id", component: UpdateDepartamentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
