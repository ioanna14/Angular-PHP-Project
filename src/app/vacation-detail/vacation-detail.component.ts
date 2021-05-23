import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {Vacation} from "../vacation";
import {VacationService} from "../vacation.service";


@Component({
  selector: 'app-vacation-detail',
  templateUrl: './vacation-detail.component.html',
  styleUrls: ['./vacation-detail.component.css']
})
export class VacationDetailComponent implements OnInit {
  // @ts-ignore
  vacation: Vacation;

  constructor(
    private route: ActivatedRoute,
    private vacationService: VacationService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getVacation();
  }

  getVacation(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.vacationService.getVacation(id)
      .subscribe(vacation => {this.vacation = vacation;
      console.log(vacation)});
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.vacationService.updateVacation(this.vacation)
      .subscribe(() => this.goBack());
  }
}
