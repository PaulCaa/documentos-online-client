import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DocumentsService } from '../../services/documents.services';
import { DocumentInterface } from 'src/app/models/document.interface';
import { UserInterface } from '../../models/user.interface';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-document',
  templateUrl: './find-document.component.html',
  styleUrls: ['./find-document.component.css']
})
export class FindDocumentComponent implements OnInit {

  public findDocumentForm: FormGroup;
  public results: DocumentInterface[];
  public emptyMessage: boolean = false;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private documentService: DocumentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let login: boolean = this.loginService.validateLogin();
    if(!login) {
      this.router.navigate(['login']);
    } else {
      this.findDocumentForm = this.formBuilder.group({
        numero: new FormControl('',Validators.required),
        fecha: new FormControl(''),
        empresa: new FormControl(''),
        sector: new FormControl('')
      });
      this.listDocumentByCompany();
    }
  }

  listDocumentByCompany() {
    let user: UserInterface = JSON.parse(localStorage.getItem('user'));
    this.documentService.listDocumentsBy(user['empresaId'])
    .subscribe(result => {
      this.results = result.data;
    },
    error => this.emptyMessage = true);
  }

  findDocument() {
    let doc: DocumentInterface = this.findDocumentForm.value;
    // se hace request solo si se ingreso numero de doc
    if(doc.numero.length > 0){
      this.documentService.find(doc.numero)
      .subscribe(result => {
        let data: DocumentInterface[] = result.data;
        if(data.length > 0) this.emptyMessage = false;
        else this.emptyMessage = true;
        this.results = data;
      }, error => {
        this.emptyMessage = true;
      });
    } else {
      alert("Ingrese Número de documento");
    }
  }

  deleteDocument(docNumber: number) {
    if(docNumber == null || docNumber == 0) {
      alert(`No se puede eliminar documento ${docNumber}, vuelvalo a intentar`);
    } else {
      this.documentService.delete(docNumber)
      .subscribe(result => {
        if(result.header.resultCode == 'OK'){
          //window.location.reload;
          alert('Documento borrado');
        } else {
          //window.location.reload;
          alert(`No se pudo eliminar documento ${docNumber}, vuelvalo a intentar`);
        }
      },
      error => {
        //window.location.reload;
        alert('Error: ' + error);
      });
    }
    this.router.navigate(['login']);
  }

  view(document: DocumentInterface) {
    this.documentService.setDocument(document);
    this.router.navigate(['vista']);
  }

  addDocument() {
    this.router.navigate(['documentos/agregar']);
  }

  resetForm() {
    this.findDocumentForm.reset();
  }

}
