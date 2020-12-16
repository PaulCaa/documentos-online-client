import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GuardService } from '../../services/guard.service';
import { Router } from '@angular/router';
import { DocumentsService } from 'src/app/services/documents.services';
import { DocumentInterface } from '../../models/document.interface';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {

  public addDocumentForm: FormGroup;

  constructor(
    private guardService: GuardService,
    private formBuilder: FormBuilder,
    private router: Router,
    private documentsService: DocumentsService
  ) { }

  ngOnInit(): void {
    if(this.guardService.canActivate()) {
      this.addDocumentForm = this.formBuilder.group({
        numero: new FormControl('',Validators.required),
        imgPath: new FormControl('',Validators.required),
        empresa: new FormControl('',Validators.required),
        sector: new FormControl('',Validators.required)
      });
    }
  }

  save() {
    let doc: DocumentInterface = this.addDocumentForm.value;
    if(doc != null && doc.numero.length > 0 && doc.imgPath.length > 0
      && doc.empresa.length > 0 && doc.sector.length > 0) {
        this.documentsService.insert(doc)
        .subscribe(
          result => {
            if(result.header.resultCode == 'OK'){
              alert('Se insertó documento' + doc.numero);
              this.router.navigate(['documentos']);
            } else {
              alert('Error: ' + result.header.message);
              //this.router.navigate(['documentos/agregar']);
            }
          },
          err => {
            console.error(err);
            alert('Veifique los datos');
        });
      }
  }

  cancel() {
    this.router.navigate(['documentos']);
  }

  resetForm() {
    this.addDocumentForm.reset();
  }
}
