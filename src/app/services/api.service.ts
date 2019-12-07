import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { People } from "../model/people";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private readonly API = "https://uinames.com/api/";

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<People[]>(`${this.API}?ext&amount=100`).pipe(
      tap(people => console.log),
      catchError(this.handleError("list", []))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
