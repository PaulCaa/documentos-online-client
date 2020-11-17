import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DocumentsService } from '../../../services/documents.services';
import { DocumentInterface } from '../../../models/document.interface';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  public addDocumentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.addDocumentForm = this.formBuilder.group({
      docNumber: new FormControl(''),
      imgPath: new FormControl(''),
      idCompany: new FormControl(''),
      idSector: new FormControl('')
    });
  }

  saveDocument() {
    console.log("guardando..");
  }

  resetForm(){
    this.addDocumentForm.reset();
  }
}
