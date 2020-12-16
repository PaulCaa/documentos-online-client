import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
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
    private loginService: LoginService,
    private router: Router,
    private companiesService: CompaniesService
  ) { }

  ngOnInit(): void {
    let login: boolean = this.loginService.validateLogin();
    if(!login) {
      this.router.navigate(['login']);
    } else {
      this.listSectors();
    }
  }

  listSectors() {
    let user: UserInterface = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    this.userCompany = user['nombreEmpresa'];
    this.companiesService.listSectors(user['empresaId'])
    .subscribe(
      result => {
        this.sectors = result.data;
        console.log(this.sectors);
      },
      err => console.error(err)
    );
  }

}
