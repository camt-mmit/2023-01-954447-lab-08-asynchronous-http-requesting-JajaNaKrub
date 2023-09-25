import { Routes } from '@angular/router';
import { StarWarPageComponent } from './pages/star-war-page/star-war-page.component';
import { PeopleListPageComponent } from './pages/people/people-list-page/people-list-page.component';
import { SpecieViewComponent } from './specie/specie-view/specie-view.component';
import { PlanetViewComponent } from './planet/planet-view/planet-view.component';
import { PeopleViewPageComponent } from './pages/people/people-view-page/people-view-page.component';
import { SpecieListPageComponent } from './pages/specie/specie-list-page/specie-list-page.component';

export const routes: Routes = [
  {
    path: '',
    component: StarWarPageComponent,
    children: [
      { path: '', redirectTo: 'people', pathMatch: 'full' },
      { path: 'people', component: PeopleListPageComponent },
      { path: 'people/:id', component: PeopleViewPageComponent },
      { path: 'specie', component: SpecieListPageComponent },
      { path: 'planet', component: PlanetViewComponent },
    ],
  },
];
