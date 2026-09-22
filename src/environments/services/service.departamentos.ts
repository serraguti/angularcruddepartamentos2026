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
}