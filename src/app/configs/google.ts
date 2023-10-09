import { isDevMode } from '@angular/core';
import { Configuration } from '../google/models';

export const configuration: Configuration = {
  client_id:
    '209689905225-dj1bo29m0c7or5926cv4bb1nu5aru0cv.apps.googleusercontent.com',
  client_secret: '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',
  scopes: [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/contacts',
  ],
  redirect_uri: isDevMode()
    ? 'http://localhost:4200/google/authorization'
    : 'https://camt-mmit.github.io/2023-01-954447-lab-08-asynchronous-http-requesting-JajaNaKrub/google/authorization',
};
