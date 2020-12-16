import { Component, OnInit } from '@angular/core';
import { GuardService } from '../../services/guard.service';
import { CompaniesService } from '../../services/companies.service';
import { CompanyInterface } from '../../models/company.interface';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public companies: CompanyInterface[];

  constructor(
    private guardService: GuardService,
    private companiesService: CompaniesService
  ) { }

  ngOnInit(): void {
    if(this.guardService.canActivate()) {
      this.listCompanies()
    }
  }


  listCompanies() {
    this.companiesService.listCompanies()
    .subscribe(
      result => this.companies = result.data,
      error => console.log(error)
    );
  }


}
