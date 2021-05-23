import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';

import {Vacation} from './vacation';
import {map} from "rxjs/operators";


@Injectable({providedIn: 'root'})
export class VacationService {

  private vacationsUrl = 'http://localhost/Exemples/lab_7';
  // @ts-ignore
  vacations: Vacation[];

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  /** GET vacations from the server */
  getVacations(): Observable<Vacation[]> {
    return this.http.get(`${this.vacationsUrl}/list.php`).pipe(
      map((res) => {
        // @ts-ignore
        this.vacations = res['data'];
        return this.vacations;
      }));
  }

  /** GET vacations from the server */
  getCountries(): Observable<string[]> {
    return this.http.get(`${this.vacationsUrl}/getCountries.php`).pipe(
      map((res) => {
        // @ts-ignore
        return res['data'];
      }));
  }

  /** GET vacations from the server */
  getVacationsFromCountry(country: string): Observable<Vacation[]> {
    return this.http.get(`${this.vacationsUrl}/getByCountry.php/${country}`).pipe(
      map((res) => {
        // @ts-ignore
        return res['data'];
      }));
  }

  /** GET vacation by id. Will 404 if id not found */
  getVacation(id: number): Observable<Vacation> {
    const url = `${this.vacationsUrl}/getByID.php/${id}`;
    return this.http.get<Vacation>(url);
  }

  /** POST: add a new vacation to the server */
  addVacation(vacation: Vacation): Observable<Vacation> {
    const url = `${this.vacationsUrl}/add.php`;
    return this.http.post<Vacation>(url, vacation, this.httpOptions);
  }

  /** DELETE: delete the vacation from the server */
  deleteVacation(id: number): Observable<Vacation> {
    const url = `${this.vacationsUrl}/delete.php/${id}`;

    return this.http.delete<Vacation>(url, this.httpOptions);
  }

  /** PUT: update the vacation on the server */
  updateVacation(vacation: Vacation): Observable<any> {
    return this.http.put(`${this.vacationsUrl}/update.php`, vacation, this.httpOptions);
  }
}
