import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InterceptorService } from './services/interceptor.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SectorsComponent } from './components/sectors/sectors.component';
import { CompanyComponent } from './components/company/company.component';
import { FindDocumentComponent } from './components/find-document/find-document.component';
import { AddDocumentComponent } from './components/add-document/add-document.component';
import { LoginComponent } from './components/login/login.component';
import { APP_ROUTING } from './app.routes';
import { DocumentViewComponent } from './components/document-view/document-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectorsComponent,
    CompanyComponent,
    FindDocumentComponent,
    AddDocumentComponent,
    LoginComponent,
    DocumentViewComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
