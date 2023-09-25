import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { List, RawList, SearchData, Planet, RawPlanet } from '../models';
import { parsePlanetList } from '../helpers';

const url = 'https://swapi.dev/api/planets' as const;

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  private readonly http = inject(HttpClient);
  getAll(params?: SearchData): Observable<List<Planet>> {
    return this.http
      .get<RawList<RawPlanet>>(url, { params: params })
      .pipe(map(parsePlanetList));
  }
}
