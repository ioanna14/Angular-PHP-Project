import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VacationsComponent } from './vacations/vacations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VacationDetailComponent } from './vacation-detail/vacation-detail.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { VacationsFilterComponent } from './vacations-filter/vacations-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    VacationsComponent,
    DashboardComponent,
    VacationDetailComponent,
    VacationsFilterComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
