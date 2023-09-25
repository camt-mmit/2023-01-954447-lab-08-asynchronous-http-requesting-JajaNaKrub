type Raw<T, R extends { [KR in keyof T]?: unknown }> = {
  [K in keyof T]: K extends keyof R ? R[K] : T[K];
};

export type SearchData = { search?: string; page?: string };

export interface Resource {
  name: string;
  created: Date;
  edited: Date;
  url: URL;
}

export type RawResource = Raw<
  Resource,
  {
    created: string;
    edited: string;
    url: string;
  }
>;

export interface List<T> {
  count: number;
  previous: URL | null;
  next: URL | null;
  results: T[];
}
export type RawList<R extends RawResource> = Raw<
  List<{ [K in keyof R]: unknown }>,
  {
    previous: string | null;
    next: string | null;
    results: R[];
  }
>;

export interface Person extends Resource {
  birth_year: string; //The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
  eye_color: string; //The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye.
  gender: string; //The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.
  hair_color: string; //The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.
  height: string; //The height of the person in centimeters.
  mass: string; //The mass of the person in kilograms.
  skin_color: string; //The skin color of this person.
  homeworld: URL; //The URL of a planet resource, a planet that this person was born on or inhabits.
  films: URL[]; //An array of film resource URLs that this person has been in.
  species: URL[]; //An array of species resource URLs that this person belongs to.
  starships: URL[]; //An array of starship resource URLs that this person has piloted.
  vehicles: URL[]; //An array of vehicle resource URLs that this person has piloted.
}

export type RawPerson = RawResource &
  Raw<
    Omit<Person, 'created' | 'edited' | 'url'>,
    {
      homeworld: string;
      films: string[];
      species: string[];
      starships: string[];
      vehicles: string[];
    }
  >;

export interface Specie extends Resource {
  classification: string; //The classification of this species, such as "mammal" or "reptile".
  designation: string; //The designation of this species, such as "sentient".
  average_height: number; //The average height of this species in centimeters.
  average_lifespan: number; //The average lifespan of this species in years.
  eye_colors: string[]; //A comma-separated string of common eye colors for this species, "none" if this species does not typically have eyes.
  hair_colors: string[]; //A comma-separated string of common hair colors for this species, "none" if this species does not typically have hair.
  skin_colors: string[]; //A comma-separated string of common skin colors for this species, "none" if this species does not typically have skin.
  language: string; //The language commonly spoken by this species.
  homeworld: URL | null; //The URL of a planet resource, a planet that this species originates from.
  people: URL[]; //An array of People URL Resources that are a part of this species.
  films: URL[]; // An array of Film URL Resources that this species has appeared in.
}

export type RawSpecie = RawResource &
  Raw<
    Omit<Specie, 'created' | 'edited' | 'url'>,
    {
      homeworld: string;
      people: string[];
      films: string[];
    }
  >;

export interface Planet extends Resource {
  diameter: string; //The diameter of this planet in kilometers.
  rotation_period: string; //The number of standard hours it takes for this planet to complete a single rotation on its axis.
  orbital_period: string; //The number of standard days it takes for this planet to complete a single orbit of its local star.
  gravity: string; //A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
  population: string; //The average population of sentient beings inhabiting this planet.
  climate: string; //The climate of this planet. Comma separated if diverse.
  terrain: string; //The terrain of this planet. Comma separated if diverse.
  surface_water: string; //The percentage of the planet surface that is naturally occurring water or bodies of water.
  residents: URL[]; //An array of People URL Resources that live on this planet.
  films: URL[]; //An array of Film URL Resources that this planet has appeared in.
}

export type RawPlanet = RawResource &
  Raw<
    Omit<Planet, 'created' | 'edited' | 'url'>,
    {
      residents: string[];
      films: string[];
    }
  >;
