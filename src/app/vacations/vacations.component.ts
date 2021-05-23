import { Component, OnInit } from '@angular/core';
import {Vacation} from "../vacation";
import {VacationService} from "../vacation.service";
import {toNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Component({
  selector: 'app-vacations',
  templateUrl: './vacations.component.html',
  styleUrls: ['./vacations.component.css']
})
export class VacationsComponent implements OnInit {
  // @ts-ignore
  vacations: Vacation[];

  constructor(private vacationService: VacationService) { }

  ngOnInit() {
    this.getVacations();
  }

  getVacations(): void {
    this.vacationService.getVacations()
      .subscribe(vacations => this.vacations = vacations);
  }

  add(name: string, country: string, description: string, touristTargets: string, cost: number): void {
    name = name.trim();
    country = country.trim();
    description = description.trim();
    touristTargets = touristTargets.trim();
    if (!name && !country && !description && !touristTargets) { return; }
    this.vacationService.addVacation({name, country, description, touristTargets, cost} as Vacation)
      .subscribe(vacation => {
        this.vacations.push(vacation);
      });
  }

  delete(vacation: Vacation): void {
    this.vacations = this.vacations.filter(v => v !== vacation);
    this.vacationService.deleteVacation(vacation.id).subscribe();
  }

  Number(value: string) {
    return toNumbers(value)[0];
  }
}
