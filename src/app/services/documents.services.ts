import { Injectable } from '@angular/core';
import { DocumentInterface } from '../models/document.interface';
import { DocumentResponse } from '../models/rest/document-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentResponseInterface } from '../models/rest/document-response.interface';

@Injectable({providedIn: 'root'})
export class DocumentsService {

    private BASE_URL:string = 'http://localhost:5000/api/documentos/';

    constructor(
        private httpClient: HttpClient
    ) {}

    find(docNumber: string): Observable<DocumentResponseInterface> {
        const url = this.BASE_URL + 'get/';
        const headers = {
            'Accept': 'application/json',
            'empresa': '1',
            'sector': '3',
            'Access-Control-Allow-Origin': 'http://localhost:5000',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
        }
        console.log(url + 'get/' + docNumber);
        return this.httpClient.get<DocumentResponseInterface>(url + docNumber,{headers});

    }
}