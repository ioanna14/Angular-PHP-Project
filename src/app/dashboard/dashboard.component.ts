import {Component, OnInit} from '@angular/core';
import {Vacation} from "../vacation";
import {VacationService} from "../vacation.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  vacations: Vacation[] = [];

  constructor(private vacationService: VacationService) {
  }

  ngOnInit(): void {
    this.getVacations();
  }

  getVacations(): void {
    this.vacationService.getVacations().subscribe(v => this.vacations = v);
  }

}
