import { Injectable } from "@angular/core";
import { environment } from "../environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Departamento } from "../../app/models/departamento";
import { firstValueFrom, Observable } from "rxjs";
@Injectable()
export class ServiceDepartamentos {
    constructor(private _http: HttpClient){}

    async getDepartamentosAsync(): Promise<Array<Departamento>>{
        let request = "api/departamentos";
        let url = environment.urlApiDepartamentos + request;
        return firstValueFrom(this._http.get<Array<Departamento>>(url));
    }

    async findDepartamentoAsync(idDepartamento: number): Promise<Departamento>{
        let request = "api/departamentos/" + idDepartamento;
        let url = environment.urlApiDepartamentos + request;
        return firstValueFrom(this._http.get<Departamento>(url));
    }
    
    updateDepartamento(departamento: Departamento): Observable<any>{
        let json = JSON.stringify(departamento);
        let header = new HttpHeaders().set("content-type", "application/json");
        let request = "api/departamentos";
        let url = environment.urlApiDepartamentos + request;
        return this._http.put(url, json, {headers: header});
    }

    createDepartamento(departamento: Departamento): Observable<any>{
        //CONVERTIRMOS EL OBJETO DEPARTAMENTO A JSON PARA DATA
        let json = JSON.stringify(departamento);
        //CREAMOS EL HEADER PARA INDICAR EL TIPADO
        let header = new HttpHeaders();
        header = header.set("content-type", "application/json");
        let request = "api/departamentos";
        let url = environment.urlApiDepartamentos + request;
        return this._http.post(url, json, { headers: header});
    }

    deleteDepartamento(idDepartamento: number): Observable<any>{
        let request = "api/departamentos/" + idDepartamento;
        let url = environment.urlApiDepartamentos + request;
        return this._http.delete(url);
    }
}