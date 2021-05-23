import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {VacationDetailComponent} from "./vacation-detail/vacation-detail.component";
import {VacationsComponent} from "./vacations/vacations.component";
import {VacationsFilterComponent} from "./vacations-filter/vacations-filter.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'filter', component:VacationsFilterComponent},
  { path: 'detail/:id', component: VacationDetailComponent },
  { path: 'vacations', component: VacationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
