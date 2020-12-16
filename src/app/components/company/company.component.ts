import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CompaniesService } from '../../services/companies.service';
import { CompanyInterface } from '../../models/company.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public companies: CompanyInterface[];

  constructor(
    private loginService: LoginService,
    private router: Router,
    private companiesService: CompaniesService
  ) { }

  ngOnInit(): void {
    let login: boolean = this.loginService.validateLogin();
    if(!login) {
      this.router.navigate(['login']);
    } else {
      this.listCompanies()
    }
  }


  listCompanies() {
    this.companiesService.listCompanies()
    .subscribe(
      result => {
        this.companies = result.data;
      },
      error => console.log(error)
    );
  }


}
