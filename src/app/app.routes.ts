import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'google',
    pathMatch: 'full',
  },
  {
    path: 'star-war',
    loadChildren: () =>
      import('./star-war/star-war.routes').then((mod) => mod.routes),
  },
  {
    path: 'google',
    loadChildren: () =>
      import('./google/google.routes').then((mod) => mod.routes),
  },
];
