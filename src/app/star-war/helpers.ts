import {
  List,
  Person,
  RawList,
  RawPerson,
  RawResource,
  Resource,
} from './models';

export function parseResource<T extends Resource>(rawResource: RawResource): T {
  return {
    ...rawResource,
    created: new Date(rawResource.created),
    edited: new Date(rawResource.edited),
    url: new URL(rawResource.url),
  } as T;
}

export function parseList(rawList: RawList<RawResource>): List<RawResource> {
  return {
    ...rawList,
    previous: rawList.previous ? new URL(rawList.previous) : null,
    next: rawList.next ? new URL(rawList.next) : null,
  };
}

export function parsePerson(rawPerson: RawPerson): Person {
  return {
    // ...rawPerson,
    ...parseResource(rawPerson),
    homeworld: new URL(rawPerson.homeworld),
    films: rawPerson.films.map((url) => new URL(url)),
    species: rawPerson.species.map((url) => new URL(url)),
    starships: rawPerson.starships.map((url) => new URL(url)),
    vehicles: rawPerson.vehicles.map((url) => new URL(url)),
  };
}

export function parsePeopleList(
  rawPeopleList: RawList<RawPerson>,
): List<Person> {
  return {
    ...parseList(rawPeopleList),
    results: rawPeopleList.results.map((result) => parsePerson(result)),
  };
}
