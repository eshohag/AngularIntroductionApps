import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CarServiceService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:52148/api/Car/';
  getCars() {
    return this.http.get(this.url).pipe(
      map((data: any) => <Car[]>data),
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
    private handleError(error: HttpErrorResponse) {
      console.error(error);
      const msg = `Error status code ${error.status} at ${error.url}`;
      return throwError(msg);
    }
}

export class Car {
  constructor(
    public Id: number,
    public Name: string,
    public Type: string,
    public Speed: number,
    public Image: string
  ) {}
}
