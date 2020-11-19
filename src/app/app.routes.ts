import { RouterModule, Routes } from '@angular/router';
import { SectorsComponent } from './components/sectors/sectors.component';
import { CompanyComponent } from './components/company/company.component';
import { FindDocumentComponent } from './components/find-document/find-document.component';
import { AddDocumentComponent } from './components/add-document/add-document.component';
import { LoginComponent } from './components/login/login.component';
import { DocumentViewComponent } from './components/document-view/document-view.component';

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'documentos', component: FindDocumentComponent },
    { path: 'vista', component: DocumentViewComponent },
    { path: 'documentos/agregar', component: AddDocumentComponent },
    { path: 'sectores', component: SectorsComponent },
    { path: 'empresas', component: CompanyComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);