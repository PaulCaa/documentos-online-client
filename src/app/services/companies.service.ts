import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyResponse } from '../models/rest/company-response';
import { ResponseInterface } from '../models/rest/response.interface';

@Injectable({providedIn: 'root'})
export class CompaniesService {

    private BASE_URL:string = 'http://localhost:5000/api/';

    constructor(
        private httpClient: HttpClient
    ) {}

    listCompanies(): Observable<CompanyResponse> {
        const url = this.BASE_URL + 'empresas/';
        const headers = {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:5000',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
        }
        console.log(url);
        return this.httpClient.get<CompanyResponse>(url,{ headers });
    }

    listSectors(idCompany: number): Observable<ResponseInterface> {
        const url = this.BASE_URL + 'empresa/' + idCompany + '/sectores/';
        const headers = {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:5000',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
        }
        console.log(url);
        return this.httpClient.get<ResponseInterface>(url,{ headers });
    }

    findCompanyBy(id: number): Observable<CompanyResponse>  {
        const url = this.BASE_URL + 'empresa/';
        const headers = {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:5000',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
        }
        console.log(url);
        return this.httpClient.get<CompanyResponse>(url + id,{ headers });
    }
}