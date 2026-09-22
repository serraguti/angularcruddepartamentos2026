import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosComponent } from './components/departamentos-component/departamentos-component';
import { InsertDepartamentoComponent } from './components/insert-departamento-component/insert-departamento-component';
const routes: Routes = [
  {path: "", component: DepartamentosComponent },
  { path: "create", component: InsertDepartamentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
