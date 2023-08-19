import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  readonly APIUrl = environment.APIUrl + 'inscription/';

  constructor(
    private http: HttpClient
  ) { }

  save(inscription: any): Observable<any> {
    return this.http.post<any>(this.APIUrl + 'save', inscription);
  }
}
