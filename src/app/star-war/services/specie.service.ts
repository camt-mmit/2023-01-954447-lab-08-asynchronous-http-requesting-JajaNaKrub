import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { List, RawList, RawSpecie, SearchData, Specie } from '../models';
import { parseSpecieList } from '../helpers';

const url = 'https://swapi.dev/api/species' as const;

@Injectable({
  providedIn: 'root',
})
export class SpecieService {
  private readonly http = inject(HttpClient);
  getAll(params?: SearchData): Observable<List<Specie>> {
    return this.http
      .get<RawList<RawSpecie>>(url, { params: params })
      .pipe(map(parseSpecieList));
  }
}
