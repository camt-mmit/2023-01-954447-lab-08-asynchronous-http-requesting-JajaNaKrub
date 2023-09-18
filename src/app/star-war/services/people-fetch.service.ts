import { Injectable } from '@angular/core';
import { List, Person } from '../models';
import { parsePeopleList } from '../helpers';

const url = 'https://swapi.dev/api/people/';

@Injectable({
  providedIn: 'root',
})
export class PeopleFetchService {
  async getAll(): Promise<List<Person>> {
    return parsePeopleList(await (await fetch(url)).json());
    // const res = await fetch(url);
    // const rawData = await res.json();
    // return parsePeopleList(rawData);
  }
}
