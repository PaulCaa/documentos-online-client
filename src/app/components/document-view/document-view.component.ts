import { Component, OnInit } from '@angular/core';
import { DocumentInterface } from 'src/app/models/document.interface';
import { DocumentsService } from 'src/app/services/documents.services';

@Component({
  selector: 'app-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.css']
})
export class DocumentViewComponent implements OnInit {

  document: DocumentInterface;

  constructor(
    private documentsService: DocumentsService
  ) { }

  ngOnInit(): void {
    this.document = this.documentsService.getDocument();
    console.log(this.document);
  }

}
