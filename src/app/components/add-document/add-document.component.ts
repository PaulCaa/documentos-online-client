import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {

  public addDocumentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addDocumentForm = this.formBuilder.group({
      numero: new FormControl('',Validators.required),
      imagen: new FormControl('',Validators.required),
      empresa: new FormControl('',Validators.required),
      sector: new FormControl('',Validators.required)
    });
  }

  save() {

  }

  cancel() {
    this.router.navigate(['documentos']);
  }

  resetForm() {
    this.addDocumentForm.reset();
  }
}
