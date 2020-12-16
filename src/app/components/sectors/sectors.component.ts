import { Component, OnInit } from '@angular/core';
import { GuardService } from '../../services/guard.service';
import { CompaniesService } from '../../services/companies.service';
import { SectorInterface } from '../../models/sector.interface';
import { UserInterface } from '../../models/user.interface';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {

  public sectors: SectorInterface[];
  public userCompany: string;

  constructor(
    private guardService: GuardService,
    private companiesService: CompaniesService
  ) { }

  ngOnInit(): void {
    if(this.guardService.canActivate()) {
      this.listSectors();
    }
  }

  listSectors() {
    let user: UserInterface = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    this.userCompany = user['nombreEmpresa'];
    this.companiesService.listSectors(user['empresaId'])
    .subscribe(
      result => this.sectors = result.data,
      err => console.error(err)
    );
  }

}
