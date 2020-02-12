import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoncalikService {


  apiUrl: string = `https://api.happi.dev/v1/generate-password?apikey=5f573b6cfgNKqx2rh1JP1pnqUbAjsFhmFL6ciLBbiJ8Ci8Am0GpHHvba`;


  passLimit: string = `&limit=`;

  passLength: string = `&length=`;

  upperSymbols: string = `&num=1&upper=1&symbols=1`;


  constructor(
    private http: HttpClient
  ) { 

  }
 
  getIpAddress() {
    return this.http
          .get('https://ipapi.co/json/')
          .pipe(
            catchError(this.handleError)
          );
  } 


  getYesNoData() {
    return this.http
          .get('https://yesno.wtf/api?ref=apilist.fun')
          .pipe(
            catchError(this.handleError)
          );
  } 


  GetData(length: number, limit: number) {
    return this.http.get<IPassword>(this.apiUrl+ this.passLimit + limit + this.passLength + length + this.upperSymbols);
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
    
      console.error('An error occurred:', error.error.message);
    } else {
    
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
   
    return throwError(
      'Something bad happened; please try again later.');
  }

}
export interface IPassword {
  success: boolean;
  length: number;
  settings: ISettings;
  passwords: string[];
}

export interface ISettings {
  numbers: boolean;
  symbols: boolean;
  uppercase: boolean;
}
