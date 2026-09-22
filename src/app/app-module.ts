import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { DepartamentosComponent } from './components/departamentos-component/departamentos-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceDepartamentos } from '../environments/services/service.departamentos';
import { InsertDepartamentoComponent } from './components/insert-departamento-component/insert-departamento-component';

@NgModule({
  declarations: [App, MenuComponent, DepartamentosComponent, InsertDepartamentoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ServiceDepartamentos, provideHttpClient(), provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
