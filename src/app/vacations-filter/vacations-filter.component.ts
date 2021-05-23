import {Component, OnInit} from '@angular/core';
import {Vacation} from "../vacation";
import {VacationService} from "../vacation.service";

@Component({
  selector: 'app-vacations-filter',
  templateUrl: './vacations-filter.component.html',
  styleUrls: ['./vacations-filter.component.css']
})
export class VacationsFilterComponent implements OnInit {
// @ts-ignore
  vacations: Vacation[];
  // @ts-ignore
  countries: string[];

  constructor(private vacationService: VacationService) {
  }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.vacationService.getCountries()
      .subscribe(country => this.countries = country);
  }

  onOptionsSelected(country: string) {
    this.vacationService.getVacationsFromCountry(country)
      .subscribe(vacations => this.vacations = vacations);
  }
}
