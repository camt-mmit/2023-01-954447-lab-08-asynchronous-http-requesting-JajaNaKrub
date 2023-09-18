type Raw<T, R extends { [KR in keyof T]?: unknown }> = {
  [K in keyof T]: K extends keyof R ? R[K] : T[K];
};

export type SearchData = { search?: string, page?: string };

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
