import {
  List,
  Person,
  Planet,
  RawList,
  RawPerson,
  RawPlanet,
  RawResource,
  RawSpecie,
  Resource,
  Specie,
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

export function parseSpecie(rawSpecie: RawSpecie): Specie {
  return {
    // ...rawPerson,
    ...parseResource(rawSpecie),
    homeworld: rawSpecie.homeworld ? new URL(rawSpecie.homeworld) : null,
    people: rawSpecie.films.map((url) => new URL(url)),
    films: rawSpecie.films.map((url) => new URL(url)),
  };
}

export function parseSpecieList(
  rawSpecieList: RawList<RawSpecie>,
): List<Specie> {
  return {
    ...parseList(rawSpecieList),
    results: rawSpecieList.results.map((result) => parseSpecie(result)),
  };
}

export function parsePlanet(rawPlanet: RawPlanet): Planet {
  return {
    // ...rawPerson,
    ...parseResource(rawPlanet),
    residents: rawPlanet.residents.map((url) => new URL(url)),
    films: rawPlanet.films.map((url) => new URL(url)),
  };
}

export function parsePlanetList(
  rawPlanetList: RawList<RawPlanet>,
): List<Planet> {
  return {
    ...parseList(rawPlanetList),
    results: rawPlanetList.results.map((result) => parsePlanet(result)),
  };
}
