import { Routes } from '@angular/router';
import { GooglePageComponent } from './pages/google-page/google-page.component';
import { RequireTokenPageComponent } from './pages/require-token-page/require-token-page.component';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { EventsListPageComponent } from './pages/events/events-list-page/events-list-page.component';
import { EventCreatePageComponent } from './pages/events/event-create-page/event-create-page.component';
import { PeopleListPageComponent } from './pages/peoples/people-list-page/people-list-page.component';
import { PeopleCreatePageComponent } from './pages/peoples/people-create-page/people-create-page.component';

export const routes: Routes = [
  {
    path: '',
    component: GooglePageComponent,
    children: [
      { path: '', redirectTo: 'events', pathMatch: 'full' },
      { path: 'authorization', component: AuthorizationPageComponent },
      {
        path: '',
        component: RequireTokenPageComponent,
        children: [
          {
            path: 'events',
            children: [
              {
                path: '',
                component: EventsListPageComponent,
              },
              {
                path: 'create',
                component: EventCreatePageComponent,
              },
            ],
          },
          {
            path: 'contact',
            children: [
              {
                path: '',
                component: PeopleListPageComponent,
              },
              {
                path: 'create',
                component: PeopleCreatePageComponent,
              },
            ],
          },
        ],
      },
    ],
  },
];
