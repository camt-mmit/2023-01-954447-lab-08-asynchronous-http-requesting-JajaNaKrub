import { Injectable, inject } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { EventQueryParams, EventsList, parseEventsList } from '../models';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';

const url =
  'https://www.googleapis.com/calendar/v3/calendars/primary/events' as const;
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private readonly http = inject(HttpClient);
  private readonly tokenService = inject(TokenService);
  getAll(params?: EventQueryParams): Observable<EventsList> {
    return this.tokenService.getAuthorizationHeader().pipe(
      switchMap((authorizationHeader) =>
        this.http.get<EventsList>(url, {
          headers: {
            Authorization: authorizationHeader,
          },
          params,
        }),
      ),
      map((eventsList) => parseEventsList(eventsList)),
    );
  }
}
