import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DocumentsService } from '../../../services/documents.services';
import { DocumentInterface } from '../../../models/document.interface';
import { DocumentResponseInterface} from '../../../models/rest/document-response.interface';

@Component({
  selector: 'app-find-form',
  templateUrl: './find-form.component.html',
  styleUrls: ['./find-form.component.css']
})
export class FindFormComponent implements OnInit {

  public findDocumentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private documentService: DocumentsService
  ) { }

  ngOnInit(): void {
    this.findDocumentForm = this.formBuilder.group({
      docNumber: new FormControl('',Validators.required),
      date: new FormControl(''),
      company: new FormControl(''),
      sector: new FormControl('')
    });
  }

  findDocument() {
    let doc: DocumentInterface = this.findDocumentForm.value;
    this.documentService.find(doc.docNumber)
    .subscribe(result => {
      let response:DocumentResponseInterface = result;
      console.log(response);
    }, error => console.error(error)
    );
  }

  resetForm() {
    this.findDocumentForm.reset();
  }

}
