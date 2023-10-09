import { Injectable, inject } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import {
  EventFormData,
  ConnectionsListParams,
  ConnectionsList,
  parseConnectionsList,
  Person,
  PersonFormData,
} from '../models';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';

const url = 'https://people.googleapis.com/v1/people/me/connections' as const;
const url2 = 'https://people.googleapis.com/v1/people:createContact' as const;
@Injectable({
  providedIn: 'root',
})
export class PeoplesService {
  private readonly http = inject(HttpClient);
  private readonly tokenService = inject(TokenService);
  getAll(params?: ConnectionsListParams): Observable<ConnectionsList> {
    return this.tokenService.getAuthorizationHeader().pipe(
      switchMap((authorizationHeader) =>
        this.http.get<ConnectionsList>(url, {
          headers: {
            Authorization: authorizationHeader,
          },
          params,
        }),
      ),
      map(parseConnectionsList),
    );
  }

  create(personFormData: PersonFormData): Observable<Person> {
    return this.tokenService.getAuthorizationHeader().pipe(
      switchMap((authorizationHeader) =>
        this.http.post<Person>(url2, personFormData, {
          headers: {
            Authorization: authorizationHeader,
          },
        }),
      ),
    );
  }
}
