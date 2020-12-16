import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentResponse } from '../models/rest/document-response';
import { Observable } from 'rxjs';
import { DocumentInterface } from '../models/document.interface';

@Injectable({providedIn: 'root'})
export class DocumentsService {

    private BASE_URL:string = 'http://localhost:5000/api/documentos/';
    private document: DocumentInterface;

    constructor(
        private httpClient: HttpClient
    ) {}

    find(docNumber: string): Observable<DocumentResponse> {
        const url = this.BASE_URL + 'get/';
        const headers = {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:5000',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
        }
        console.log(url + docNumber);
        return this.httpClient.get<DocumentResponse>(url + docNumber,{headers});

    }

    delete(docNumber: number): Observable<DocumentResponse> {
        const url = this.BASE_URL + docNumber;
        const headers = {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:5000',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
        }
        console.log(url);
        return this.httpClient.delete<DocumentResponse>(url,{headers});
    }

    insert(document: DocumentInterface): Observable<DocumentResponse> {
        //const url = this.BASE_URL + 'empresa/' + document.idCompany + '/sector/' + document.idSector;
        const url = this.BASE_URL + 'empresa/' + document.empresa + '/sector/' + document.sector;
        const headers = {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:5000',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
        }
        console.log(url);
        let body = {
            numero: document.numero,
            imgPath: document.imgPath
        }
        return this.httpClient.post<DocumentResponse>(url,body,{headers});
    }

    setDocument(doc: DocumentInterface) {
        this.document = doc;
    }

    getDocument(): DocumentInterface {
        return this.document;
    }
}