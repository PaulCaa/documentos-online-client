import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DocumentsService } from '../../services/documents.services';
import { DocumentInterface } from 'src/app/models/document.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-document',
  templateUrl: './find-document.component.html',
  styleUrls: ['./find-document.component.css']
})
export class FindDocumentComponent implements OnInit {

  public findDocumentForm: FormGroup;
  public results: DocumentInterface[];
  public emptyMessage: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private documentService: DocumentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findDocumentForm = this.formBuilder.group({
      numero: new FormControl('',Validators.required),
      fecha: new FormControl(''),
      empresa: new FormControl(''),
      sector: new FormControl('')
    });
  }

  findDocument() {
    let doc: DocumentInterface = this.findDocumentForm.value;
    this.documentService.find(doc.numero)
    .subscribe(result => {
      let data: DocumentInterface[] = result.data;
      console.log(result.header.message);
      if(data.length > 0) this.emptyMessage = false;
      this.results = data;
    }, error => console.error(error));
  }

  deleteDocument(docNumber: number) {
    if(docNumber == null || docNumber == 0) {
      console.error("No se puede eliminar documento " + docNumber);
      alert(`No se puede eliminar documento ${docNumber}, regargue la pagina`);
    } else {
      this.documentService.delete(docNumber)
      .subscribe(result => {
        console.log(result.header.message)
      }, error => console.error(error),
      () => {});
    }
  }

  view(document: DocumentInterface) {
    console.log(document);
    this.documentService.setDocument(document);
    this.router.navigate(['vista']);
  }

  resetForm() {
    this.findDocumentForm.reset();
  }

}
