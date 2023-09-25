import { Routes } from '@angular/router';
import { GooglePageComponent } from './pages/google-page/google-page.component';
import { RequireTokenPageComponent } from './pages/require-token-page/require-token-page.component';

export const routes: Routes = [
  {
    path: '',
    component: GooglePageComponent,
    children: [
      { path: '', redirectTo: 'event', pathMatch: 'full' },
      { path: 'event', component: RequireTokenPageComponent },
    ],
  },
];
