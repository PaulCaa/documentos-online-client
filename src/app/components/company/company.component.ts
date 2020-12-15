import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
import { CompanyInterface } from '../../models/company.interface';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public companies: CompanyInterface[];

  constructor(
    private CompaniesService: CompaniesService
  ) { }

  ngOnInit(): void {
    this.listCompanies()
  }


  listCompanies() {
    this.CompaniesService.listCompanies()
    .subscribe(
      result => {
        console.log(result);
        //let temp: CompanyInterface[] = result.data;
        this.companies = result.data;
        console.log(this.companies);
      },
      error => console.log(error),
      () => console.log('se listaron las empresas')
      
    );
  }

}
