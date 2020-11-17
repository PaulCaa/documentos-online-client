import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SectorsComponent } from './components/sectors/sectors.component';
import { CompanyComponent } from './components/company/company.component';
import { FindFormComponent } from './components/shared/find-form/find-form.component';
import { AddFormComponent } from './components/shared/add-form/add-form.component';
import { FindDocumentComponent } from './components/find-document/find-document.component';
import { AddDocumentComponent } from './components/add-document/add-document.component';
import { LoginComponent } from './components/login/login.component';
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectorsComponent,
    CompanyComponent,
    FindFormComponent,
    AddFormComponent,
    FindDocumentComponent,
    AddDocumentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
