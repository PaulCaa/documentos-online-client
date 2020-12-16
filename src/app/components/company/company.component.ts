import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
import { CompanyInterface } from '../../models/company.interface';
import { SectorInterface } from '../../models/sector.interface';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public companies: CompanyInterface[];
  public sectors: SectorInterface[];

  constructor(
    private companiesService: CompaniesService
  ) { }

  ngOnInit(): void {
    this.listCompanies()
  }


  listCompanies() {
    this.companiesService.listCompanies()
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

  listSectors(idCompany: number) {
    if(idCompany > 0) {
      this.companiesService.listSectors(idCompany)
      .subscribe(
        result => {
          this.sectors = result.data;
          console.log(this.sectors);
        },
        err => console.error(err)
      );
    }
  }

}
